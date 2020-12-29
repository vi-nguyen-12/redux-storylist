import { SET_LOADING, FETCH, ERROR, CHANGE_PAGE, STOP_LOADING, SET_STORY } from "./types";
import storiesApi from "axios/storiesApi";
import { calNumOfPages } from "./util.js";

export const setLoading = () => ({ type: SET_LOADING });
export const stopLoading = () => ({ type: STOP_LOADING });

export const fetchInit = ()=> async dispatch => {
  try {
    dispatch(setLoading());
    const res = await storiesApi.getDefault();
    dispatch({type:FETCH, payload:res.hits});
  } catch (err) {
    dispatch({ type: ERROR, payload: "error" });
  } finally {
    dispatch(stopLoading());
  }
};

export const changePage = page => async dispatch=>{
  try{
    dispatch(setLoading());
    const res = await storiesApi.get({page:page-1});
    dispatch({type:FETCH, payload:res.hits});
  }
  catch(err){
    dispatch({ type: ERROR, payload: "error" })
  }
  finally {
    dispatch(stopLoading());
  }
};

export const findStory = id => async dispatch=>{
  try{
    dispatch(setLoading());
    const res = await storiesApi.get({tags:`story_:${id}`});
    console.log(res)
    // dispatch({type:SET_STORY, payload:res.hits});
  }
  catch(err){
    dispatch({ type: ERROR, payload: "error" })
  }
  finally {
    dispatch(stopLoading());
  }
};


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
