import { SET_LOADING, FETCH, ERROR, CHANGE_PAGE, STOP_LOADING } from "./types";
import storiesApi from "axios/storiesApi";
import { calNumOfPages } from "./util.js";

export const setLoading = () => ({ type: SET_LOADING });
export const stopLoading = () => ({ type: STOP_LOADING });
export const fetch = (list, numOfPages) => ({
  type: FETCH,
  payload: { list, numOfPages }
});

export const fetchStories = storiesPerPage => async dispatch => {
  try {
    dispatch(setLoading());
    const list = [];
    const res = await storiesApi.getDefault();
    list.push({
      id: res.id,
      title: res.title,
      author: res.author,
      type: res.type
    });
    const numOfPages = calNumOfPages(list.length, storiesPerPage);
    console.log(list);
    dispatch(fetch(list, numOfPages));
  } catch (err) {
    dispatch({ type: ERROR, payload: "error" });
  } finally {
    dispatch(stopLoading());
  }
};
export const changePage = page => ({ type: CHANGE_PAGE, payload: page });
export const getSearch = (input, history) => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await storiesApi.search({ query: input });
    const list = res.hits.map(x => {
      return {
        id: x.objectID,
        title: x.title,
        author: x.author,
        numOfComments: x.num_comments,
        type: x._tags[0]
      };
    });
    const numOfPages = calNumOfPages(list.length, 5);
    dispatch(fetch(list, numOfPages));
    history.push(`/?query=${input}`); //nó fetch tới 2 lần lận nè
  } catch (err) {
    dispatch({ type: ERROR, payload: "error" });
  } finally {
    dispatch(stopLoading());
  }
};
