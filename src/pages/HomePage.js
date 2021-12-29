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
      <div className={styles.container}>
        {blogList.map((a) => (
          <>
            <table>
              <tr>
                <td>
                  <h5>Blog</h5>
                  {a.id}
                </td>
                <br />
              </tr>
              <tr>
                <td className={styles.container__tableDescription}>
                  <h5>Title </h5>
                  {a.title}
                </td>
                <br />
              </tr>
              <br />
              <Link to={`/ShowBlogDetails/${a.id}`}>Open this blog</Link>
              <br />
              <hr className={styles.contentDivider} />
            </table>
          </>
        ))}
      </div>
    </>
  );
}

export default HomePage;
