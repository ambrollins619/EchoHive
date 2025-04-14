import React, { useContext } from 'react'
import { ModalContext } from '../context/modalContext';
import styles from '../styles/ResponseModal.module.css'
import { createPortal } from 'react-dom'
import profileImage from '../assets/megan.png'

const ResponseModal = () => {
    const { setShowModal } = useContext(ModalContext)
    return createPortal(
        <div className={styles.modal}>
            <div className={styles.modalTop}>
                <div className={styles.closeModal} onClick={() => setShowModal(false)}>X</div>
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
        </div>,
        document.getElementById('modal-root')
    )
}

export default ResponseModal