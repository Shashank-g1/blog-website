import React from "react";
import { useParams } from "react-router";
import styles from "./ShowBlogDetails.module.less";

function ShowBlogDetails() {
  const id = useParams();

  return (
    <>
      <div className={styles.container1}>
        <h2>Hello user {id.id}</h2>
      </div>

      <h4>Add A Comment Below</h4>
      <body>
        <div className={styles.container}>
          <form>
            <div className="form-group">
              <textarea
                className="form-control status-box"
                rows="3"
                placeholder="Enter your comment here..."
              />
            </div>
          </form>
          <div className="button-group pull-right">
            <button className="btn btn-primary">Post</button>
          </div>
        </div>
      </body>
    </>
  );
}

export default ShowBlogDetails;
