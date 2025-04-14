import React, { useEffect, useState } from 'react'
import styles from '../styles/PostsContainer.module.css'
import profileImage from '../assets/jack.png'
import postImage1 from '../assets/car.png'
import postImage2 from '../assets/cat.gif'
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";   // Comment icon
import { FaArrowUp, FaArrowDown } from "react-icons/fa6"; // Upvote & Downvote icons
import Post from './Post'

const UserPosts = ({ posts, reactedPosts, handleEditPost, deletePostMutation }) => {

    return (
        <div className={styles.postsContainer}>
            {
                [...posts]?.reverse().map((post,index) => {
                    if(!post){
                        return ""
                    }
                    const userVote = reactedPosts?.find(p => p?.post?._id === post?._id)?.voteType;
                    return (
                        <Post
                            key={post._id}
                            post={post}

                            handleEditPost={handleEditPost}
                            userVote={userVote}
                            onDelete={(postId) => deletePostMutation.mutate({ postId })}
                        />
                    )
                })
            }
        </div>
    )
}

export default UserPosts