import React, { useState } from "react";
import Button from "../Button";
import styles from "./Comment.module.less";

function Comment(props) {
  const { element: comment, index, deleteComment, updateComment } = props;

  const deletedComment = () => {
    deleteComment(comment);
  };

  const [flagValue, setflagValue] = useState(false);

  const [button, setbutton] = useState(false);

  const [editedComment, seteditedComment] = useState(comment);

  const editComment = () => {
    setflagValue(!flagValue);
    setbutton(!button);
  };
  const onChangeHandler = (e) => {
    seteditedComment(e.target.value);
  };

  const updatedComment = () => {
    updateComment(index, editedComment);
    setbutton(!button);
    setflagValue(!flagValue);
  };
  return (
    <>
      <li>{comment}</li>

      {flagValue && button ? (
        <>
          <form className={styles.editBox}>
            <textarea
              className="form-control status-box"
              rows="2"
              placeholder={comment}
              onChange={onChangeHandler}
              value={editedComment}
            ></textarea>
          </form>

          <Button
            className="btn btn-danger"
            text="Submit"
            onClick={updatedComment}
            styles={{ margin: "0.2rem 0 0 -1.2rem", fontSize: "0.9rem" }}
          />
        </>
      ) : (
        ""
      )}

      {flagValue && button ? (
        ""
      ) : (
        <>
          <Button
            className="btn btn-danger"
            text="Delete"
            onClick={deletedComment}
            styles={{
              margin: "-4.1rem 0 0 28rem",
              width: "5rem",
              fontSize: "71%",
            }}
          />
          <Button
            className="btn btn-danger"
            text="Edit"
            onClick={editComment}
            styles={{
              margin: "-8rem 0 0 22rem",
              width: "4rem",
              fontSize: "71%",
            }}
          />
        </>
      )}
    </>
  );
}

export default Comment;
