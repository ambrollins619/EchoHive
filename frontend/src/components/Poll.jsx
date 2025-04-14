import React, { useState, useEffect } from 'react';
import styles from '../styles/Poll.module.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaRandom, FaStepForward } from "react-icons/fa";
import { MdShuffle, MdSkipNext } from "react-icons/md";
import profileImage from '../assets/megan.png';
import lock from '../assets/Lock.gif'

const Poll = () => {
    const isActive = true;
    const [timeLeft, setTimeLeft] = useState({
        hours: 2,
        minutes: 30,
        seconds: 0,
    });
    const [progress, setProgress] = useState(10); // Starts at 100%

    // Simulate countdown (replace with actual poll schedule logic)
    useEffect(() => {
        const totalSeconds = timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds;
        const interval = setInterval(() => {
            if (totalSeconds <= 0) {
                clearInterval(interval);
                return;
            }
            const newTotalSeconds = totalSeconds - 1;
            const hours = Math.floor(newTotalSeconds / 3600);
            const minutes = Math.floor((newTotalSeconds % 3600) / 60);
            const seconds = newTotalSeconds % 60;
            setTimeLeft({ hours, minutes, seconds });
            setProgress((newTotalSeconds / (2 * 3600 + 30 * 60)) * 100); // 2h30m initial time
        }, 1000);
        return () => clearInterval(interval);
    }, [timeLeft]);

    if (!isActive) {
        return (
            <div className={styles.pollContainer}>
                <div className={styles.questions}>
                    <div className={styles.inactivePoll}>
                        <p className={styles.inactiveMessage}>
                            Next poll in: {timeLeft.hours}h {timeLeft.minutes}m
                        </p>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <img src={lock} alt="lock" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.pollContainer}>
            <div className={`${styles.arrow} ${styles.freezedArrow}`}>
                <FaArrowLeft size={30} />
            </div>
            <div className={styles.questions}>
                <div className={styles.questionsFill}>
                    {/* A rectangular fill to check what question you are at right now.*/}
                    {/* Once you respond to the last question. The poll will be marked as inactive.*/}
                    <div className={styles.fill}>
                        <div className={styles.actualFill} style={{ width: "42%" }}></div>
                    </div>
                    <div className={styles.questionsCount}>
                        05 / 12
                    </div>
                </div>
                <div className={styles.question}>
                    <div className={styles.questionInfo}>
                        <div className={styles.emoji}>
                            🔥
                        </div>
                        <div className={styles.statement}>
                            They have so much free time
                        </div>
                    </div>
                    <div className={styles.options}>
                        <div className={styles.option}>
                            <img src={profileImage} alt="profile" className={styles.optionProfileImage} />
                            Pushpa
                        </div>
                        <div className={`${styles.option} ${styles.freezedOption}`}>
                            <img src={profileImage} alt="profile" className={styles.optionProfileImage} />
                            Krishna
                        </div>
                        <div className={styles.option}>
                            <img src={profileImage} alt="profile" className={styles.optionProfileImage} />
                            Aditya
                        </div>
                        <div className={`${styles.option} ${styles.freezedOption} ${styles.selectedOption}`}>
                            <img src={profileImage} alt="profile" className={styles.optionProfileImage} />
                            Nikhil
                        </div>
                    </div>
                </div>
                <div className={styles.questionOptions}>
                    <div className={styles.questionOption}>
                        <FaRandom size={25} />
                        Shuffle
                    </div>
                    <div className={styles.questionOption}>
                        <FaStepForward size={25} style={{ transform: "scaleY(0.8)" }} />
                        Skip
                    </div>
                </div>
            </div>
            <div className={styles.arrow}>
                <FaArrowRight size={30} />
            </div>
        </div>
    )
}

export default Poll