/* eslint-disable import/no-anonymous-default-export */
import {
  FETCHING_BLOG_LIST,
  FETCHING_BLOG_LIST_SUCCESS,
  FETCHING_BLOG_DATA,
  FETCHING_BLOG_DATA_SUCCESS,
  ADD_COMMENT,
} from "./actionTypes";

const initialState = {
  blogList: [],
  isFetchingBlogList: false,
  isFetchingBlogData: false,
  blogData: {},
  comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BLOG_LIST:
      return { ...state, isFetchingBlogList: action.payload };
    case FETCHING_BLOG_LIST_SUCCESS:
      return { ...state, blogList: action.payload };
    case FETCHING_BLOG_DATA:
      return { ...state, isFetchingBlogData: action.payload };
    case FETCHING_BLOG_DATA_SUCCESS:
      return { ...state, blogData: action.payload };
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    default:
      return state;
  }
};
