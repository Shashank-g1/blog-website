import {
  FETCHING_BLOG_LIST,
  FETCHING_BLOG_LIST_SUCCESS,
  FETCHING_BLOG_DATA,
  FETCHING_BLOG_DATA_SUCCESS,
  ADD_COMMENT,
} from "./actionTypes";
import { batch } from "react-redux";
import axios from "axios";

export const displayingBlogList = (flag) => {
  return { type: FETCHING_BLOG_LIST, payload: flag };
};

export const fetchBlogList = () => {
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

export const fetchingBlogData = (flag) => {
  return { type: FETCHING_BLOG_DATA, payload: flag };
};

export const fetchBlogData = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchingBlogData(true));
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      batch(() => {
        dispatch({ type: FETCHING_BLOG_DATA_SUCCESS, payload: data });
        dispatch(fetchingBlogData(false));
      });
    } catch (error) {
      batch(() => {
        dispatch(fetchingBlogData(false));
      });
    }
  };
};

export const addingComments = (data) => {
  return { type: ADD_COMMENT, payload: data };
};
