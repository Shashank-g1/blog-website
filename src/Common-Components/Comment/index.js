import { connect } from "react-redux";
import Comment from "./Comment";
import { deleteComment, updateComment } from "../../state/blogActions";

const mapStateToProps = (state) => {
  const {
    blogReducer: { comments },
  } = state;
  return { comments };
};

export default connect(mapStateToProps, { deleteComment, updateComment })(
  Comment
);
