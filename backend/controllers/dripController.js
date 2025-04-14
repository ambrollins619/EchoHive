import mongoose from "mongoose";
import { Drip } from "../models/Drip.model.js";
import { Question } from "../models/Question.model.js";
import { QuestionResponse } from "../models/QuestionResponse.model.js";
import { User } from "../models/User.model.js";
import { QUESTIONS_POOL } from "../utils/questions.js";
import { userSocketMap } from "../socket/socket.js";
import { Notification } from "../models/Notification.model.js";

export const createDrip = async (userId) => {
    try {
        // i will not create a drip immendiatly after registeration
        // it will be created first time after the user click on the drip page
        // we will check in frontend if a drip object already exists for the user
        // if it does not exist we will create a new drip object
        // and assign it with the user ki id
        const user = await User.findById(userId);
        const friendIds = user.friends;
        // need to create a new Drip
        const drip = await Drip.create({
            userId,
            questions: []
        })
        const questions = QUESTIONS_POOL.sort(() => Math.random() - 0.5).slice(0, 6);
        // creating questions
        try {
            const createdQuestions = await Promise.all(
                questions.map(async (questionText) => {
                    let options = [];
                    if (friendIds.length >= 4) {
                        options = friendIds.sort(() => Math.random() - 0.5).slice(0, 4);
                    } else {
                        const neededUsers = 4 - friendIds.length;
                        const randomUsers = await User.aggregate([
                            { $match: { _id: { $nin: [...friendIds, userId] } } },
                            { $sample: { size: neededUsers } }
                        ]);
                        options = [...friendIds, ...randomUsers.map(u => u._id)];
                    }

                    // Create the question
                    const question = await Question.create({
                        text: questionText,
                        options: options.map(uId => { return { "userId": uId } })
                    });

                    return question._id;
                })
            );

            // Add questions to Drip
            drip.questions = createdQuestions;
        } catch (error) {
            console.log("Error in creating questions for drip");
            console.error("Error message: ", error.message);
        }


        await drip.save();
        await drip.populate("questions")

        return drip;
    } catch (error) {
        console.error("Error creating drip:", error.message);
        throw error;
    }
}

export const updateDrip = async (req, res) => {
    try {
        const { dripId, questionId, selectedUserId } = req.params

        if (!mongoose.Types.ObjectId.isValid(dripId)) {
            return res.status(400).json({ success: false, message: "Drip not found" })
        }

        if (!mongoose.Types.ObjectId.isValid(questionId)) {
            return res.status(400).json({ success: false, message: "Question not found" })
        }

        if (!mongoose.Types.ObjectId.isValid(selectedUserId)) {
            return res.status(400).json({ success: false, message: "Selected User not found" })
        }

        const drip = await Drip.findById(dripId).populate({
            path: 'questions',
            model: 'Question'
        })

        if (!drip.userId.equals(req.user._id)) {
            return res.status(403).json({ success: false, message: "Unauthorized action" })
        }

        if (!drip) {
            return res.status(400).json({ success: false, message: "Drip not found" })
        }

        if (!drip.questions.some(question => question._id.equals(questionId))) {
            return res.status(400).json({ success: false, message: "Question not found" })
        }

        if (Date.now() < drip.activityDate) {
            return res.status(400).json({ success: false, message: "Drip is not currently active" })
        }

        const question = await Question.findById(questionId)

        if (question.questionResponse) {
            return res.status(400).json({ success: false, message: "Question has already been responded to" })
        }

        if (!question.options.some(({ userId }) => userId.equals(selectedUserId))) {
            return res.status(400).json({ success: false, message: "Selected user not found within question options" })
        }

        const questionResponse = await QuestionResponse.create({
            questionId,
            responderId: req.user._id,
            selectedOption: selectedUserId,
        })

        try {
            const notification = await Notification.create({
                notificationType: "QUESTION_RESPONSE",
                message: `Someone in college`,
                referenceId: questionResponse._id,
            })

            const selectedUser = await User.findById(selectedUserId);
            selectedUser.notifications.push(notification._id);
            await selectedUser.save();
            
            if (selectedUserId in userSocketMap) {
                io.to(userSocketMap[selectedUserId]).emit('newNotification', notification);
            }

        } catch (error) {
            console.log("Error in sending notifications to selected user");
            console.error("Error message: ", error.message);
        }
        // after this I need to send notification to the user which was selected

        question.questionResponse = questionResponse._id;
        await question.save();
        await drip.populate("questions")

        if (drip.questions.every(question => question.questionResponse !== null)) {
            drip.isCompleted = true
            drip.activityDate = Date.now() + 1000 * 60 * 60

            const userId = req.user._id;
            const friendIds = req.user.friends;

            const questions = QUESTIONS_POOL.sort(() => Math.random() - 0.5).slice(0, 6);
            // creating questions
            try {
                const createdQuestions = await Promise.all(
                    questions.map(async (questionText) => {
                        let options = [];
                        if (friendIds.length >= 4) {
                            options = friendIds.sort(() => Math.random() - 0.5).slice(0, 4);
                        } else {
                            const neededUsers = 4 - friendIds.length;
                            const randomUsers = await User.aggregate([
                                { $match: { _id: { $nin: [...friendIds, userId] } } },
                                { $sample: { size: neededUsers } }
                            ]);
                            options = [...friendIds, ...randomUsers.map(u => u._id)];
                        }

                        // Create the question
                        const question = await Question.create({
                            text: questionText,
                            options: options.map(uId => { return { "userId": uId } })
                        });

                        return question._id;
                    })
                );

                // Add questions to Drip
                drip.questions = createdQuestions;
            } catch (error) {
                console.log("Error in creating questions for drip");
                console.error("Error message: ", error.message);
            }

            await drip.save();
            await drip.populate("questions")
        }

        return res.status(201).json(drip);

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: error.message });
    }
}

export const getDrip = async (req, res) => {
    try {
        // for each user we will have a unique drip

        let drip = await Drip.findOne({ userId: req.user._id });
        if (!drip) {
            // create a new drip
            drip = await createDrip(req.user._id)
        }
        await drip.populate("questions")


        return res.status(200).json(drip); //return the drip for the user
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: error.message });
    }
}