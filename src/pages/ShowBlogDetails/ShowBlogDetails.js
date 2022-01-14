import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./ShowBlogDetails.module.less";
import Loader from "../../Common-Components/Loader/Loader";
import NavBar from "../../Common-Components/NavBar";
import Comment from "../../Common-Components/Comment";
import Button from "../../Common-Components/Button";

function ShowBlogDetails(props) {
  const { id: blogId } = useParams();

  const { fetchBlogData, blogData, isFetchingBlogData, addComment, comments } =
    props;

  const { title, body } = blogData;

  useEffect(() => {
    fetchBlogData(blogId);
  }, [fetchBlogData, blogId]);

  const [comment, setComment] = useState("");

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const postingComment = () => {
    addComment(comment);
    setComment("");
  };

  return (
    <>
      <NavBar />
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
                onChange={onChangeHandler}
                value={comment}
              />
            </form>
            <Button
              className="btn btn-primary"
              text="Post"
              onClick={postingComment}
              styles={{ margin: " 1rem 0 0 29rem", width: "8rem" }}
            />

            {comments.map((element, index) => (
              <>
                <div className={styles.commentBox}>
                  <Comment element={element} index={index} />
                </div>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ShowBlogDetails;
