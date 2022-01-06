import NavBar from "../../Common-Components/NavBar";
import React, { useEffect } from "react";
import styles from "./HomePage.module.less";
import { Link } from "react-router-dom";
import Loader from "../../Common-Components/Loader/Loader";

function HomePage(props) {
  const { fetchBlogList, blogList, isFetchingBlogList } = props;

  useEffect(() => {
    fetchBlogList();
  }, [fetchBlogList]);

  return (
    <>
      <NavBar />

      {isFetchingBlogList ? (
        <Loader />
      ) : (
        <div className={styles.blog}>
          <div className={styles.blog__header}>Featured Articles</div>
          <hr />
          <div className={styles.blog__description}>
            {blogList.map(({ id, title }) => (
              <>
                <div className={styles.blog__description__left}>{id}</div>
                <div className={styles.blog__description__mid}>{title}</div>
                <div className={styles.blog__description__right}>
                  <Link to={`/ShowBlogDetails/${id}`}>Open this blog</Link>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
