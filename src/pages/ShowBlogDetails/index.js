import { connect } from "react-redux";
import ShowBlogDetails from "./ShowBlogDetails";
import { fetchBlogData } from "../../state/blogActions";

const mapStateToProps = (state) => {
  const {
    blogReducer: { isFetchingBlogData, blogData },
  } = state;
  return { isFetchingBlogData, blogData };
};

export default connect(mapStateToProps, { fetchBlogData })(ShowBlogDetails);
