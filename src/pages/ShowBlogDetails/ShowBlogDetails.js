import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./ShowBlogDetails.module.less";
import Loader from "../../Common-Components/Loader/Loader";
import { useDispatch } from "react-redux";

function ShowBlogDetails(props) {
  const { id: blogId } = useParams();

  const {
    fetchBlogData,
    blogData,
    isFetchingBlogData,
    addingComments,
    comments,
  } = props;

  const { title, body } = blogData;

  const dispatch = useDispatch();

  useEffect(() => {
    fetchBlogData(blogId);
  }, [blogId, fetchBlogData]);

  const [comment, setComment] = useState("");

  const addComment = () => {
    dispatch(addingComments(comment));
  };
  return (
    <>
      {isFetchingBlogData ? (
        <Loader />
      ) : (
        <div className={styles.bodyBackground}>
          <div className={styles.container}>
            <h2>Hello User {blogId}</h2>
            <div className={styles.description}>
              <h5>
                <b>Title :</b> {title}
              </h5>
              <div className={styles.description__body}>
                <b> Blog: </b>
                {body}
              </div>
            </div>
            <h4>Add a Comment Below</h4>
            <form className={styles.textBox}>
              <textarea
                className="form-control status-box"
                rows="3"
                placeholder="Enter your comment here..."
                onChange={(e) => setComment(e.target.value)}
              />
            </form>
            <button className="btn btn-primary" onClick={addComment}>
              Post
            </button>
            <br />
            {comments}
          </div>
        </div>
      )}
    </>
  );
}

export default ShowBlogDetails;
