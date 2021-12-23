import NavBar from "../Components/NavBar";
import React, { useEffect } from "react";

function HomePage(props) {
  const { displayedBlogList, isFetchingBlogList, blogList } = props;

  useEffect(() => {
    displayedBlogList();
  }, []);

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default HomePage;
