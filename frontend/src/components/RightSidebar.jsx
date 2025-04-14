import React, { useEffect, useState } from 'react'
import profileImage from '../assets/jack.png'
import styles from '../styles/RightSidebar.module.css'
import { Link } from 'react-router-dom'

const RightSidebar = () => {
    const [showAll, setShowAll] = useState(false)
    const data = [
        "Booby Lately",
        "Rick Astley",
        "Berlin",
        "AJ Styles",
        "cena",
        "rock",
        "cena",
        "rock",
        "Booby Lately",
        "Rick Astley",
        "Berlin",
        "AJ Styles",
        "cena",
        "cody",
        "seth"
    ] // at most 20 entries should be shown
    // stop showing show more when all of the data is displayed
    const [displayedUsers, setDisplayedUsers] = useState([])
    const [count, setCount] = useState(4)
    useEffect(() => {
        setDisplayedUsers(data.slice(0, count))
        if (count >= data.length) {
            setShowAll(true)
        }
    }, [count])
    return (
        <div className={styles.rightSidebar}>
            <div className={styles.recommendedUsers}>
                <div className={styles.header}>
                    People you may know
                </div>
                <div className={styles.recommendedUsersList}>
                    {
                        displayedUsers.map((username,index) => {
                            return (
                                <div key={index} className={styles.recommendedUser}>
                                    <Link to='/profile/ambrollins619' className={styles.linkStyles}>
                                        <div className={styles.recommendedUserLeft}>
                                            <div className={styles.profile}>
                                                <img src={profileImage} alt="profile" className={styles.profileImage} />
                                            </div>
                                            <div className={styles.profileInfo}>
                                                <p>{username}</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className={styles.recommendedUserRight}>
                                        <button>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        !showAll &&
                        <span onClick={() => setCount(prev => prev + 4)}>Show more</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default RightSidebar