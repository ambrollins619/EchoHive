import React, { useContext, useState } from 'react'
import styles from '../styles/Inbox.module.css'
import profileImage from '../assets/megan.png'
import { MdFlashOn } from "react-icons/md";
import ResponseModal from './ResponseModal';
import { ModalContext } from '../context/modalContext';

const Inbox = () => {
    const inboxMessages = [
        {
            time: "3 days ago"
        },
        {
            time: "2 days ago"
        },
        {
            time: "3 days ago"
        },
        {
            time: "3 days ago"
        },
        {
            time: "2 days ago"
        },
        {
            time: "3 days ago"
        },
        {
            time: "3 days ago"
        },
        {
            time: "2 days ago"
        },
        {
            time: "3 days ago"
        },
        {
            time: "3 days ago"
        },
        {
            time: "3 days ago"
        },
        {
            time: "3 days ago"
        },
    ]

    const {showModal, setShowModal} = useContext(ModalContext)

    return (
        <>
            <div className={styles.inboxContainer}>
                {
                    inboxMessages.map(({ name, time, message }) => {
                        return (
                            <div className={styles.inbox} onClick={() => setShowModal(true)}>
                                {/* <img src={profileImage} alt="profile image" /> */}
                                <MdFlashOn size={30} />
                                <div className={styles.inboxRight}>
                                    <div className={styles.inboxTop}>
                                        <p>Someone in College</p>
                                        <p>{time}</p>
                                    </div>
                                    <div className={styles.inboxBottom}>
                                        {message}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                showModal &&
                <>
                    <div className={styles.responseOverlay}></div>
                    <ResponseModal />
                </>
            }
        </>
    )
}

export default Inbox