import { connect } from "react-redux";
import HomePage from "./HomePage";
import { fetchingBlogList } from "../../state/blogActions";

const mapStateToProps = (state) => {
  const {
    blogReducer: { isFetchingBlogList, blogList },
  } = state;
  return { isFetchingBlogList, blogList };
};

export default connect(mapStateToProps, { fetchingBlogList })(HomePage);
