import { SET_LOADING, FETCH, ERROR, CHANGE_PAGE, STOP_LOADING } from "./types";
import storiesApi from "axios/storiesApi";
import axios from "axios";
import { calNumOfPages } from "util";

export const setLoading = () => ({ type: SET_LOADING });
export const stopLoading = () => ({ type: STOP_LOADING });

export const fetch = storiesPerPage => async dispatch => {
  try {
    dispatch(setLoading());
    debugger;
    const list = [];
    const res = await storiesApi.getDefault();
    list.push({
      id: res.id,
      title: res.title,
      author: res.author,
      type: res.type
    });
    console.log(list);
    const num = calNumOfPages(list.length, storiesPerPage);
    console.log(num);
    // dispatch({
    //   type: FETCH,
    //   payload: { list, numberOfPages: num }
    // });
  } catch (err) {
    dispatch({ type: ERROR, payload: "error" });
  } finally {
    dispatch(stopLoading());
  }
};
export const changePage = page => ({ type: CHANGE_PAGE, payload: page });
export const getSearch = input => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await storiesApi.search({ query: input });
    console.log(res.hits);
    const list = res.hits.map(x => {
      return {
        id: x.objectID,
        title: x.title,
        author: x.author,
        numOfComments: x.num_comments,
        type: x._tags[0]
      };
    });
    const numberOfPages = calNumOfPages(list.length);
    dispatch({
      type: FETCH,
      payload: { stories: list, pages: numberOfPages }
    });
  } catch (err) {
    dispatch({ type: ERROR, payload: "error" });
  } finally {
    dispatch(stopLoading());
  }
};
