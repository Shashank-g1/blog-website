import NavBar from "../Components/NavBar";
import React, { useEffect } from "react";
import styles from "./HomePage.module.less";
import { Link } from "react-router-dom";
function HomePage(props) {
  const { displayedBlogList, blogList } = props;

  useEffect(() => {
    displayedBlogList();
  }, [displayedBlogList]);

  console.log(blogList);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className={styles.blog}>
        <div className={styles["blog-header-container"]}>
          <div className={`${styles["blog-part"]} ${styles["right-blog"]}`}>
            <div className={styles["blog-right-title-container"]}>
              <div className={styles["blog-right-title"]}>
                Featured Articles
              </div>
            </div>
            {blogList.map((a) => (
              <>
                <div className={styles["blog-right"]}>
                  <div className={styles["blog-right-container"]}>
                    <div className={styles["blog-title-date"]}>
                      <div className={styles["blog-right-page"]}>
                        {a.id} <span className={styles.title}> {a.title}</span>
                        <span className={styles.blogLink}>
                          <Link to={`/ShowBlogDetails/${a.id}`}>
                            Open this blog
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
