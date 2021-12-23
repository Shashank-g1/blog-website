/* eslint-disable import/no-anonymous-default-export */
import { FETCHING_BLOG_LIST, FETCHING_BLOG_LIST_SUCCESS } from "./actionTypes";

const initialState = {
  blogList: {},
  isFetchingBlogList: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BLOG_LIST:
      return { ...state, isFetchingBlogList: action.payload };
    case FETCHING_BLOG_LIST_SUCCESS:
      return { ...state, blogList: action.payload };

    default:
      return state;
  }
};
