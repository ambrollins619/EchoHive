import React, { useState, useEffect, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import styles from '../styles/NoRightSidebarLayout.module.css';
import RightSidebar from '../components/RightSidebar';
import NotificationSidebar from '../components/NotificationSidebar'; // New component
import SearchSidebar from '../components/SearchSidebar';
import CreatePostModal from '../components/CreatePostModal';
import ShrinkedSidebar from '../components/ShrinkedSidebar';
import SettingsBar from '../components/SettingsBar';
import { useSelector } from 'react-redux';

const NoRightSidebarLayout = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [postModalOpen, setPostModalOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  const isLoggedIn = Boolean(auth.token);
  const [checkingAuth, setCheckingAuth] = useState(true);   // handle initial load/render edge case

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowSearchbar(false);
    setPostModalOpen(false);
    document.body.classList.toggle(styles.sidebarOpen, !showNotifications);
  };

  const toggleSearchbar = () => {
    setShowSearchbar(!showSearchbar);
    setShowNotifications(false);
    setPostModalOpen(false);
    document.body.classList.toggle(styles.sidebarOpen, !showSearchbar);
  };

  const togglePostModalOpen = () => {
    setPostModalOpen(!postModalOpen)
    setShowNotifications(false);
    setShowSearchbar(false);
    document.body.classList.toggle(styles.sidebarOpen, !postModalOpen);
  }

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showNotifications) {
        toggleNotifications();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showNotifications]);

  useEffect(() => {
    // simulate checking token from localStorage or redux restoring
    const token = localStorage.getItem('token');
    if (!auth.token && !token) {
      setCheckingAuth(false); // no token found
    } else if (token && !auth.token) {
      // restore token if redux hasn't yet
      // this depends on your App-level setup
    } else {
      setCheckingAuth(false); // token exists
    }
  }, [auth.token]);

  if (checkingAuth) return <p> Loading </p>; // or a loading spinner

  if (!isLoggedIn) {
    return <Navigate to="/signup" />;
  }

  return (
    <div className={styles.appLayout}>
      <ShrinkedSidebar
        toggleNotifications={toggleNotifications}
        toggleSearchbar={toggleSearchbar}
        togglePostModalOpen={togglePostModalOpen}
        showSearchbar={showSearchbar}
        setPostModalOpen={setPostModalOpen}
      />

      <SettingsBar />

      <main className={`${styles.mainContent} ${showNotifications || showSearchbar ? styles.blurred : ''}`}>
        <Outlet />
      </main>

      {showNotifications && (
        <>
          <div className={`${styles.notificationOverlay} ${showNotifications || showSearchbar ? styles.visible : ''}`} onClick={toggleNotifications} />
          <NotificationSidebar onClose={toggleNotifications} />
        </>
      )}

      {showSearchbar && (
        <>
          <div className={`${styles.notificationOverlay} ${showNotifications || showSearchbar ? styles.visible : ''}`} onClick={toggleSearchbar} />
          <SearchSidebar onClose={toggleSearchbar} />
        </>
      )}

      {postModalOpen && (
        <>
          <div className={`${styles.notificationOverlay} ${postModalOpen ? styles.visible : ''}`} onClick={togglePostModalOpen} />
          <CreatePostModal
            onClose={togglePostModalOpen}
            togglePostModalOpen={togglePostModalOpen}
          />
        </>
      )}
    </div>
  );
};

export default NoRightSidebarLayout;