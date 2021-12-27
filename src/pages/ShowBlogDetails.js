import React from "react";
import { useParams } from "react-router";

function ShowBlogDetails() {
  const id = useParams();

  console.log(id.id);

  return (
    <div>
      <p>Hello Guest</p>
    </div>
  );
}

export default ShowBlogDetails;
