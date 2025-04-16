import React from 'react';
import styles from '../styles/NotificationSidebar.module.css';
import profileImage from '../assets/megan.png'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { useNavigate } from 'react-router-dom';

const NotificationSidebar = ({ onClose }) => {
  const notifications = useSelector((state) => state.notification.notifications)
  const navigate = useNavigate()
  console.log(notifications);

  return (
    <div className={styles.notificationSidebar}>
      <div className={styles.notificationHeader}>
        <h3>Notifications</h3>
        <button onClick={onClose} className={styles.closeButton}>×</button>
      </div>
      <div className={styles.notificationContent}>
        {/* Map through your notifications here */}
        {
          notifications?.map(notification => {
            return notification.notificationType === "NEW_USER_JOINED" ? (
              <div className={styles.notificationItem}>
                <div className={styles.notificationAvatar}>
                  <img src={notification.referenceId.avatar || profileImage} alt="User" />
                </div>
                <div className={styles.notificationDetails}>
                  <div className={styles.notificationMeta}>
                    <span className={styles.notificationTime}>{moment(notification.createdAt).fromNow()}</span>
                  </div>
                  <p className={styles.notificationMessage}>
                    {notification.referenceId.name}, Just joined your college community
                  </p>
                  <button>Add</button>
                </div>
              </div>
            ) : (
              <div className={styles.notificationItem}>
                <div className={styles.notificationAvatar}>
                  <img src={profileImage} alt="User" />
                </div>
                <div className={styles.notificationDetails}>
                  <div className={styles.notificationMeta}>
                    <span className={styles.notificationTime}>{moment(notification.createdAt).fromNow()}</span>
                  </div>
                  <p className={styles.notificationMessage}>
                    Somebody Slickin
                  </p>
                  <button onClick={()=>{onClose();navigate('/drips/inbox')}}>View</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default NotificationSidebar;