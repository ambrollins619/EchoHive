import React, { useState, useEffect } from 'react';
import { useDebounceCallback } from 'usehooks-ts';
import { useQuery } from '@tanstack/react-query';
import styles from '../styles/SearchSidebar.module.css';
import { FaSearch } from "react-icons/fa";
import { searchUsers } from '../api/user';
import Spinner from './Spinner'
import ProfileImage from '../assets/jack.png'
import { Link } from 'react-router-dom'

const SearchSidebar = ({ onClose }) => {
  const [searchValue, setSearchValue] = useState('');
  const [showRecent, setShowRecent] = useState(true);

  // Debounce the search input (300ms delay)
  const debouncedSearch = useDebounceCallback(
    (value) => {
      if (value.length >= 2) {
        refetch(); // Trigger React Query refetch
      }
    },
    3000
  );

  const {
    data: searchResults,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['searchUsers', searchValue],
    queryFn: () => searchUsers(searchValue),
    enabled: false, // Disable automatic fetching
    staleTime: 30000,
  });

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value.length >= 2) {
      setShowRecent(false);
      debouncedSearch(value); // Will trigger refetch after debounce
    } else {
      setShowRecent(true);
    }
  };

  return (
    <div className={styles.searchSidebar}>
      <div className={styles.searchHeader}>
        <h3>Search</h3>
        <button onClick={onClose} className={styles.closeButton}>×</button>
      </div>
      <div className={styles.searchContent}>
        <div className={styles.searchBar}>
          <FaSearch size={22} />
          <input
            type="text"
            placeholder='Search a user'
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>

        {isLoading && <div className={styles.loading}><Spinner /></div>}
        {(isError && searchValue.length >= 2) && <div className={styles.error}>Error searching users</div>}

        {!showRecent ? (
          <>
            {searchResults?.users?.length > 0 ? (
              searchResults.users.map(user => {
                console.log('wow', user.collegeId)
                return (
                  <div key={user._id} className={styles.searchItem}>
                    <div className={styles.searchAvatar}>
                      <Link to={`/profile/${user.name}/posts`} onClick={onClose}>
                        <img src={user.avatar || ProfileImage} alt={user.name} />
                      </Link>
                    </div>
                    <div className={styles.searchDetails}>
                      <Link style={{textDecoration:"none"}} to={`/profile/${user.name}/posts`} onClick={onClose}>
                        <p className={styles.searchMessage}>{user.name}</p>
                      </Link>
                      <div className={styles.searchUserBio}>
                        {
                          (
                            <span className={styles.bioText}>{user.bio ||
                              `User from ${user.collegeId?.name.length > 12 ?
                                user.collegeId?.name.slice(0, 10) + '...' :
                                user.collegeId?.name}`}</span>
                          )
                        }
                      </div>
                    </div>
                  </div>
                )
              }
              )
            ) : (
              <div className={styles.noResults}>No users found {isLoading && <Spinner/>}</div>
            )}
          </>
        ) : (
          <>
            <div className={styles.recentHeader}>Recent</div>
            {/* Render recent searches here */}
            {/* You might want to store these in localStorage */}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchSidebar;