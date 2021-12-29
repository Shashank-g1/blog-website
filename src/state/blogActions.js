import { FETCHING_BLOG_LIST, FETCHING_BLOG_LIST_SUCCESS } from "./actionTypes";
import { batch } from "react-redux";
import axios from "axios";

export const displayingBlogList = (flag) => {
  return { type: FETCHING_BLOG_LIST, payload: flag };
};

export const displayedBlogList = () => {
  return async (dispatch) => {
    try {
      dispatch(displayingBlogList(true));
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      batch(() => {
        dispatch({ type: FETCHING_BLOG_LIST_SUCCESS, payload: data });
        dispatch(displayingBlogList(false));
      });
    } catch (error) {
      batch(() => {
        dispatch(displayingBlogList(false));
      });
    }
  };
};
