import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import styles from '../styles/PostFilters.module.css'

const PostFilters = () => {
    const { pathname } = useLocation()
    return (
        <>
            <div className={styles.postFilters}>
                <Link to={pathname.includes('college') ? '/explore/college/latest' : '/explore/global/latest'} className={`${styles.linkStyles} ${(!pathname.includes('trending') && !pathname.includes('popular')) ? styles.selected : ""}`}>
                    <span>Latest</span>
                </Link>
                <Link to={pathname.includes('college') ? '/explore/college/trending' : '/explore/global/trending'} className={`${styles.linkStyles} ${pathname.includes('trending') ? styles.selected : ""}`}>
                    <span>Trending</span>
                </Link>
                {/*TODO: Will add popular thing as well in future */}
                {/* <Link to={pathname.includes('college') ? '/explore/college/popular' : '/explore/global/popular'} className={`${styles.linkStyles} ${pathname.includes('popular') ? styles.selected : ""}`}>
                    <span>Popular</span>
                </Link> */}
            </div>
            <div className={styles.postTypeFilters}>
                <button className={`${styles.active} ${styles.filterBtn}`}>All</button>
                <button className={styles.filterBtn}>😂 Meme</button>
                <button className={styles.filterBtn}>❤️ Confession</button>
                <button className={styles.filterBtn}>💡Question</button>
            </div>
        </>
    )
}

export default PostFilters