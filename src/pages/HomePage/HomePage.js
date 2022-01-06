import NavBar from "../../Common-Components/NavBar";
import React, { useEffect } from "react";
import styles from "./HomePage.module.less";
import { Link } from "react-router-dom";
import Loader from "../../Common-Components/Loader/Loader";

function HomePage(props) {
  const { fetchingBlogList, blogList, isFetchingBlogList } = props;

  useEffect(() => {
    fetchingBlogList();
  }, [fetchingBlogList]);

  return (
    <>
      <NavBar />

      {isFetchingBlogList === true ? (
        <Loader />
      ) : (
        <div className={styles.blog}>
          <div className={styles.blog__header}>Featured Articles</div>
          <hr />
          <div className={styles.blog__description}>
            {blogList.map((blog) => (
              <>
                <div className={styles.blog__description__left}>{blog.id}</div>
                <div className={styles.blog__description__mid}>
                  {blog.title}
                </div>
                <div className={styles.blog__description__right}>
                  <Link to={`/ShowBlogDetails/${blog.id}`}>Open this blog</Link>
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
