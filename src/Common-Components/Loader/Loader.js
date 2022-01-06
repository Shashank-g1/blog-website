import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styles from "./Loader.module.less";

function Loader() {
  return (
    <div className={styles.loader}>
      <Spinner animation="border" />
    </div>
  );
}

export default Loader;
