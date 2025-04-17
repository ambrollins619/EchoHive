// Sidebar.jsx
import React, { useContext, useState } from 'react';
import {
    FaHome,
    FaSearch,
    FaCompass,
    FaFilm,
    FaEnvelope,
    FaHeart,
    FaPlusSquare,
    FaUser,
    FaSignOutAlt,
    FaCog
} from 'react-icons/fa';
import styles from '../styles/ShrinkedSidebar.module.css';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ShrinkedSidebar = ({ toggleNotifications, toggleSearchbar, showSearchbar }) => {

    const [settingsOptions, setSettingsOptions] = useState(false)
    const user = useSelector((state)=>state.auth.user)

    const handleLogout = () => {

    }

    return (
        <div className={`${styles.sidebar} ${showSearchbar ? styles.searchBarOpen : ""}`}>
            <div className={styles.logo}>
                <h1>EchoHive</h1>
            </div>

            <nav className={styles.nav}>
                {/* <Link to="/" className={styles.navItem}>
                    <FaHome className={styles.icon} />
                    <span>Home</span>
                </Link> */}
                <Link to="/explore/global" className={styles.navItem} onClick={toggleSearchbar}>
                    <FaSearch className={styles.icon} />
                    <span>Search</span>
                </Link>
                <Link to="/explore/global" className={styles.navItem}>
                    <FaCompass className={styles.icon} />
                    <span>Explore</span>
                </Link>
                <Link to="/drips/poll" className={styles.navItem}>
                    <FaFilm className={styles.icon} />
                    <span>Drips</span>
                </Link>
                <Link to="/explore/global" className={styles.navItem} onClick={toggleNotifications}>
                    <FaHeart className={styles.icon} />
                    <span>Notifications</span>
                </Link>
                <Link to={`/profile/${user.name}/posts`} className={styles.navItem}>
                    <FaUser className={styles.icon} />
                    <span>Profile</span>
                </Link>
            </nav>

            <div className={styles.bottomOptions}>
                <div className={`${styles.navItem} ${styles.settingsItem}`} onClick={() => setSettingsOptions(!settingsOptions)}>
                    <FaCog className={styles.icon} />
                    <span className={styles.settingsText}>Settings</span>
                </div>
            </div>
        </div>
    );
};

export default ShrinkedSidebar;