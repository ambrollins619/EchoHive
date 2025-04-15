import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/Inbox.module.css'
import profileImage from '../assets/megan.png'
import { MdFlashOn } from "react-icons/md";
import ResponseModal from './ResponseModal';
import { ModalContext } from '../context/modalContext';
import { useQuery } from '@tanstack/react-query';
import { getInbox } from '../api/drips';
import { useSelector } from 'react-redux';
import moment from 'moment'

const Inbox = () => {
   
    
    const {showModal, setShowModal} = useContext(ModalContext)
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const { data: inbox, isLoading, isError } = useQuery({
        queryKey: ['Inbox'],
        queryFn: getInbox
    })
    const user = useSelector((state)=>state.auth.user)
    useEffect(()=>console.log(inbox),[inbox])

    return (
        <>
            <div className={styles.inboxContainer}>
                {inbox?.reverse().map((item) => (
                    <div 
                        key={item._id} // Don't forget a unique key
                        className={styles.inbox} 
                        onClick={() => {
                            setSelectedQuestion(item);
                            setShowModal(true);
                        }}
                    >
                        <MdFlashOn size={30} />
                        <div className={styles.inboxRight}>
                            <div className={styles.inboxTop}>
                                <p>Someone in {user.collegeId === item.responderId.collegeId._id 
                                    ? "College" 
                                    : item.responderId.collegeId.name}
                                </p>
                                <p>{moment(item.createdAt).fromNow()}</p>
                            </div>
                        </div>
                    </div>
                ))}
                
                {showModal && selectedQuestion && (
                    <>
                        <div className={styles.responseOverlay}></div>
                        <ResponseModal 
                            item={selectedQuestion} 
                            onClose={() => setShowModal(false)}
                        />
                    </>
                )}
            </div>
        </>
    );
}

export default Inbox