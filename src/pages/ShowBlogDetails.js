import React, { useEffect } from "react";
import { useParams } from "react-router";
import styles from "./ShowBlogDetails.module.less";
import { useSelector, useDispatch } from "react-redux";
import { gettingBlogData } from "../state/blogActions";

function ShowBlogDetails(props) {
  const id = useParams();

  const { blogData, blogList } = useSelector((state) => state.blogReducer);

  const dispatch = useDispatch();

  const sendingBlogId = (id) => {
    const blogData = blogList.find((c) => c.id === parseInt(id));
    dispatch(gettingBlogData(blogData));
  };

  useEffect(() => {
    sendingBlogId(id.id);
  }, [id.id]);

  console.log(blogData);

  return (
    <>
      <div className={styles.container1}>
        <h2>Hello user {id.id}</h2>
      </div>

      <h5>
        <b>Title :</b> {blogData.title}
      </h5>
      <div className={styles.mainContent}>
        <b> Blog: </b>
        {blogData.body}
      </div>

      <h4>Add a Comment Below</h4>
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
