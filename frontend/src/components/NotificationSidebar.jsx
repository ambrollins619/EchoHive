import React from 'react';
import styles from '../styles/NotificationSidebar.module.css';
import profileImage from '../assets/megan.png'

const NotificationSidebar = ({ onClose }) => {
  return (
    <div className={styles.notificationSidebar}>
      <div className={styles.notificationHeader}>
        <h3>Notifications</h3>
        <button onClick={onClose} className={styles.closeButton}>×</button>
      </div>
      <div className={styles.notificationContent}>
        {/* Map through your notifications here */}
        <div className={styles.notificationItem}>
          <div className={styles.notificationAvatar}>
            <img src={profileImage} alt="User" />
          </div>
          <div className={styles.notificationDetails}>
            <div className={styles.notificationMeta}>
              <span className={styles.notificationTime}>2 days ago</span>
            </div>
            <p className={styles.notificationMessage}>
              Krishna, Just joined your college community
            </p>
            <button>Add</button>
          </div>
        </div>
        <div className={styles.notificationItem}>
          <div className={styles.notificationAvatar}>
            <img src={profileImage} alt="User" />
          </div>
          <div className={styles.notificationDetails}>
            <div className={styles.notificationMeta}>
              <span className={styles.notificationTime}>2 days ago</span>
            </div>
            <p className={styles.notificationMessage}>
              Shobhit, Just joined your college community
            </p>
            <button className={styles.addedFriend}>Added</button>
          </div>
        </div>
        <div className={styles.notificationItem}>
          <div className={styles.notificationAvatar}>
            <img src={profileImage} alt="User" />
          </div>
          <div className={styles.notificationDetails}>
            <div className={styles.notificationMeta}>
              <span className={styles.notificationTime}>3 days ago</span>
            </div>
            <p className={styles.notificationMessage}>
              Somebody Slickin
            </p>
            <button>View</button>
          </div>
        </div>
        <div className={styles.notificationItem}>
          <div className={styles.notificationAvatar}>
            <img src={profileImage} alt="User" />
          </div>
          <div className={styles.notificationDetails}>
            <div className={styles.notificationMeta}>
              <span className={styles.notificationTime}>2 days ago</span>
            </div>
            <p className={styles.notificationMessage}>
              Krishna, Just joined your college community
            </p>
            <button>Add</button>
          </div>
        </div>
        <div className={styles.notificationItem}>
          <div className={styles.notificationAvatar}>
            <img src={profileImage} alt="User" />
          </div>
          <div className={styles.notificationDetails}>
            <div className={styles.notificationMeta}>
              <span className={styles.notificationTime}>2 days ago</span>
            </div>
            <p className={styles.notificationMessage}>
              Shobhit, Just joined your college community
            </p>
            <button className={styles.addedFriend}>Added</button>
          </div>
        </div>
        <div className={styles.notificationItem}>
          <div className={styles.notificationAvatar}>
            <img src={profileImage} alt="User" />
          </div>
          <div className={styles.notificationDetails}>
            <div className={styles.notificationMeta}>
              <span className={styles.notificationTime}>3 days ago</span>
            </div>
            <p className={styles.notificationMessage}>
              Somebody Slickin
            </p>
            <button>View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSidebar;