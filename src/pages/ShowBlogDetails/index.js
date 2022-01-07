import { connect } from "react-redux";
import ShowBlogDetails from "./ShowBlogDetails";
import { fetchBlogData, addingComments } from "../../state/blogActions";

const mapStateToProps = (state) => {
  const {
    blogReducer: { isFetchingBlogData, blogData, comments },
  } = state;
  return { isFetchingBlogData, blogData, comments };
};

export default connect(mapStateToProps, { fetchBlogData, addingComments })(
  ShowBlogDetails
);
