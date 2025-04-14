import React from 'react'
import TopBar from '../components/TopBar'
import PostFilters from '../components/PostFilters'
import styles from '../styles/GlobalExplore.module.css'
import PostsContainer from '../components/PostsContainer'
import { useOutletContext } from 'react-router-dom'

const GlobalExplore = () => {
  const { handleEditPost } = useOutletContext()
  return (
    <div className={styles.exploreSection}>
      <TopBar/>
      <PostFilters/>
      <PostsContainer handleEditPost={handleEditPost}/>
    </div>
  )
}

export default GlobalExplore