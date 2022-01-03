/* eslint-disable import/no-anonymous-default-export */
import {
  FETCHING_BLOG_LIST,
  FETCHING_BLOG_LIST_SUCCESS,
  GET_BLOG_DATA,
} from "./actionTypes";

const initialState = {
  blogList: [],
  isFetchingBlogList: false,
  blogData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BLOG_LIST:
      return { ...state, isFetchingBlogList: action.payload };
    case FETCHING_BLOG_LIST_SUCCESS:
      return { ...state, blogList: action.payload };
    case GET_BLOG_DATA:
      return { ...state, blogData: action.payload };

    default:
      return state;
  }
};
