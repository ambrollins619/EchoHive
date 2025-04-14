import React, { useState } from 'react'
import styles from '../styles/PostsContainer.module.css'
import profileImage from '../assets/jack.png'
import postImage1 from '../assets/car.png'
import postImage2 from '../assets/cat.gif'
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";   // Comment icon
import { FaArrowUp, FaArrowDown } from "react-icons/fa6"; // Upvote & Downvote icons

const ReactedPosts = () => {

  return (
    <div className={styles.postsContainer}>
      <div className={styles.post}>
        <div className={styles.postTopSection}>
          <div className={styles.postTopLeftSection}>
            <div className={styles.postProfile}>
              <img src={profileImage} alt="profile" className={styles.postProfileImage} />
            </div>
            <div className={styles.postProfileInfo}>
              <p>Jack Gallagher</p>
              <span>2 days ago</span>
            </div>
          </div>
          <div className={styles.postTopRightSection}>
            <div className={styles.postOptionsMenu}>
              <div onClick={() => setOpen(!open)} className={styles.postOptionsIcon}>
                <BsThreeDots size={20} />
              </div>
              <div className={styles.postOptions}>
                <p className={styles.postOption}>Report</p>
                <p className={styles.postOption}>Mute</p>
                <p className={styles.postOption}>Block</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.postTextContent}>
          Hi I am Jack. Nice to see you everybody.
        </div>
        <div className={styles.postStats}>
          <div className={`${styles.postStatsItem} ${styles.commentText}`}>
            <FaRegComment size={20} />
            Comments
          </div>
          <div className={`${styles.postStatsItem} ${styles.upvotesText}`}>
            <div className={styles.iconColor}>
              <FaArrowUp size={20} />
            </div>
            200
          </div>
          <div className={`${styles.postStatsItem} ${styles.downvotesText}`}>
            <FaArrowDown size={20} />
            3K
          </div>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.postTopSection}>
          <div className={styles.postTopLeftSection}>
            <div className={styles.postProfile}>
              <img src={profileImage} alt="profile" className={styles.postProfileImage} />
            </div>
            <div className={styles.postProfileInfo}>
              <p>Jack Gallagher</p>
              <span>2 days ago</span>
            </div>
          </div>
          <div className={styles.postTopRightSection}>
            <div className={styles.postOptionsMenu}>
              <div onClick={() => setOpen(!open)} className={styles.postOptionsIcon}>
                <BsThreeDots size={20} />
              </div>
              <div className={styles.postOptions}>
                <p className={styles.postOption}>Report</p>
                <p className={styles.postOption}>Mute</p>
                <p className={styles.postOption}>Block</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.postTextContent}>
          I have crazy car. It will take you 4 lives to buy this car.
        </div>
        <div className={styles.postImage}>
          <img src={postImage1} alt="car image" />
        </div>
        <div className={styles.postStats}>
          <div className={`${styles.postStatsItem} ${styles.commentText}`}>
            <FaRegComment size={20} style={{ color: "blue" }} />
            Comments
          </div>
          <div className={`${styles.postStatsItem} ${styles.upvotesText}`}>
            <FaArrowUp color="#ff0000" size={20} />
            1.5K
          </div>
          <div className={`${styles.postStatsItem} ${styles.downvotesText} ${styles.downvotedStyles}`}>
            <FaArrowDown size={20} />
            100
          </div>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.postTopSection}>
          <div className={styles.postTopLeftSection}>
            <div className={styles.postProfile}>
              <img src={profileImage} alt="profile" className={styles.postProfileImage} />
            </div>
            <div className={styles.postProfileInfo}>
              <p>Jack Gallagher</p>
              <span>2 days ago</span>
            </div>
          </div>
          <div className={styles.postTopRightSection}>
            <div className={styles.postOptionsMenu}>
              <div onClick={() => setOpen(!open)} className={styles.postOptionsIcon}>
                <BsThreeDots size={20} />
              </div>
              <div className={styles.postOptions}>
                <p className={styles.postOption}>Report</p>
                <p className={styles.postOption}>Mute</p>
                <p className={styles.postOption}>Block</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.postTextContent}>
          This is my first poll.
        </div>

        <div className={styles.poll}>
          <p className={styles.pollOption}>
            <span>This is first poll option</span>
          </p>
          <p className={styles.pollOption}>
            <span>This is second poll option</span>
          </p>
          <p className={styles.pollOption}>
            <span>Shinchan</span>
          </p>
        </div>

        <div className={styles.postStats}>
          <div className={`${styles.postStatsItem} ${styles.commentText}`}>
            <FaRegComment size={20} style={{ color: "blue" }} />
            Comments
          </div>
          <div className={`${styles.postStatsItem} ${styles.upvotesText} ${styles.upvotedStyles}`}>
            <FaArrowUp size={20} />
            1.5K
          </div>
          <div className={`${styles.postStatsItem} ${styles.downvotesText}`}>
            <FaArrowDown size={20} />
            100
          </div>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.postTopSection}>
          <div className={styles.postTopLeftSection}>
            <div className={styles.postProfile}>
              <img src={profileImage} alt="profile" className={styles.postProfileImage} />
            </div>
            <div className={styles.postProfileInfo}>
              <p>Jack Gallagher</p>
              <span>2 days ago</span>
            </div>
          </div>
          <div className={styles.postTopRightSection}>
            <div className={styles.postOptionsMenu}>
              <div onClick={() => setOpen(!open)} className={styles.postOptionsIcon}>
                <BsThreeDots size={20} />
              </div>
              <div className={styles.postOptions}>
                <p className={styles.postOption}>Report</p>
                <p className={styles.postOption}>Mute</p>
                <p className={styles.postOption}>Block</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.postTextContent}>
          I love cats.
        </div>
        <div className={`${styles.postImage} ${styles.tall}`}>
          <img src={postImage2} alt="cat image" />
        </div>
        <div className={styles.postStats}>
          <div className={`${styles.postStatsItem} ${styles.commentText}`}>
            <FaRegComment size={20} style={{ color: "blue" }} />
            Comments
          </div>
          <div className={`${styles.postStatsItem} ${styles.upvotesText} ${styles.upvotedStyles}`}>
            <FaArrowUp size={20} />
            1.5K
          </div>
          <div className={`${styles.postStatsItem} ${styles.downvotesText}`}>
            <FaArrowDown size={20} />
            100
          </div>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.postTopSection}>
          <div className={styles.postTopLeftSection}>
            <div className={styles.postProfile}>
              <img src={profileImage} alt="profile" className={styles.postProfileImage} />
            </div>
            <div className={styles.postProfileInfo}>
              <p>Jack Gallagher</p>
              <span>2 days ago</span>
            </div>
          </div>
          <div className={styles.postTopRightSection}>
            <div className={styles.postOptionsMenu}>
              <div onClick={() => setOpen(!open)} className={styles.postOptionsIcon}>
                <BsThreeDots size={20} />
              </div>
              <div className={styles.postOptions}>
                <p className={styles.postOption}>Report</p>
                <p className={styles.postOption}>Mute</p>
                <p className={styles.postOption}>Block</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.postTextContent}>
          This is my freezed poll.
        </div>

        <div className={styles.freezedPoll}>
          <p className={styles.freezedPollOption}>
            <div className={styles.fillBar} style={{ width: "16%" }}></div>
            <span>This is first poll option</span>
            <span>100</span>
          </p>
          <p className={`${styles.freezedPollOption} ${styles.highestVotes}`}>
            <div className={styles.fillBar} style={{ width: "72%" }}></div>
            <span>This is second poll option</span>
            <span>430</span>
          </p>
          <p className={styles.freezedPollOption}>
            <div className={styles.fillBar} style={{ width: "11%" }}></div>
            <span>Shinchan</span>
            <span>69</span>
          </p>
        </div>

        <div className={styles.postStats}>
          <div className={`${styles.postStatsItem} ${styles.commentText}`}>
            <FaRegComment size={20} style={{ color: "blue" }} />
            Comments
          </div>
          <div className={`${styles.postStatsItem} ${styles.upvotesText} ${styles.upvotedStyles}`}>
            <FaArrowUp size={20} />
            1.5K
          </div>
          <div className={`${styles.postStatsItem} ${styles.downvotesText}`}>
            <FaArrowDown size={20} />
            100
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReactedPosts