import React from "react";
import { useParams } from "react-router";
import styles from "./ShowBlogDetails.module.less";

function ShowBlogDetails() {
  const id = useParams();

  return (
    <div className={styles.container}>
      <h3>Hello user {id.id}</h3>
      <p> </p>
    </div>
  );
}

export default ShowBlogDetails;
