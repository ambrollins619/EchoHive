import mongoose from "mongoose"

const DripSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    questions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Question"
        }
    ],
    activityDate: {
        type: Date,
        default: Date.now,
    }
});

export const Drip = mongoose.model("Drip", DripSchema);