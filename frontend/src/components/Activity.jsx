import React from 'react'
import styles from '../styles/Activity.module.css'
import profileImage from '../assets/megan.png'

const Activity = () => {
    const activities = [
        {
            name: "Krishna",
            time: "3 days ago",
            message: "They don't get a double chin even if they try"
        },
        {
            name: "Shobhit",
            time: "2 days ago",
            message: "They only like general waale log"
        },
        {
            name: "Nikhil",
            time: "3 days ago",
            message: "They wanto to be hosca sec"
        },
        {
            name: "Krishna",
            time: "3 days ago",
            message: "They don't get a double chin even if they try"
        },
        {
            name: "Shobhit",
            time: "2 days ago",
            message: "They only like general waale log"
        },
        {
            name: "Nikhil",
            time: "3 days ago",
            message: "They wanto to be hosca sec"
        },
        {
            name: "Krishna",
            time: "3 days ago",
            message: "They don't get a double chin even if they try"
        },
        {
            name: "Shobhit",
            time: "2 days ago",
            message: "They only like general waale log. He is pedophile. He wants paisa lots of paisa and wants to leave this country."
        },
        {
            name: "Nikhil",
            time: "3 days ago",
            message: "They wanto to be hosca sec"
        },
        {
            name: "Nikhil",
            time: "3 days ago",
            message: "They wanto to be hosca sec"
        },
    ]
    return (
        <div className={styles.activityContainer}>
            {
                activities.map(({ name, time, message }) => {
                    return (
                        <div className={styles.activity}>
                            <img src={profileImage} alt="profile image" />
                            <div className={styles.activityRight}>
                                <div className={styles.activityTop}>
                                    <p><b>{name}</b> Recieved</p>
                                    <p>{time}</p>
                                </div>
                                <div className={styles.activityBottom}>
                                    {message}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Activity