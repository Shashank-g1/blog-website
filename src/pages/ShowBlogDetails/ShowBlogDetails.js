import React, { useEffect } from "react";
import { useParams } from "react-router";
import styles from "./ShowBlogDetails.module.less";
import Loader from "../../Common-Components/Loader/Loader";

function ShowBlogDetails(props) {
  const { id: blogId } = useParams();

  const { fetchBlogData, blogData, isFetchingBlogData } = props;

  const { title, body } = blogData;

  useEffect(() => {
    fetchBlogData(blogId);
  }, [blogId, fetchBlogData]);

  return (
    <>
      {isFetchingBlogData ? (
        <Loader />
      ) : (
        <div className={styles.bodyBackground}>
          <div className={styles.container}>
            <h2>Hello user {blogId}</h2>

            <div className={styles.description}>
              <h5>
                <b>Title :</b> {title}
              </h5>
              <div className={styles.mainContent}>
                <b> Blog: </b>
                {body}
              </div>
            </div>

            <h4>Add a Comment Below</h4>

            <form>
              <div>
                <textarea
                  className="form-control status-box"
                  rows="3"
                  placeholder="Enter your comment here..."
                />
              </div>
            </form>

            <button className="btn btn-primary">Post</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowBlogDetails;
