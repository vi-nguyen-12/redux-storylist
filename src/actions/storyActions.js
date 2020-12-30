import { SET_LOADING, FETCH, ERROR, CHANGE_PAGE, STOP_LOADING, SET_STORY } from "./types";
import storiesApi from "axios/storiesApi";
import { calNumOfPages } from "./util.js";

export const setLoading = () => ({ type: SET_LOADING });
export const stopLoading = () => ({ type: STOP_LOADING });

export const fetch = (page=1)=> async dispatch => {
  try {
    dispatch(setLoading());
    const res = await storiesApi.get({page:page-1});
    dispatch({
      type:FETCH, 
      payload:{stories:res.hits,totalPages:res.nbPages}});
  } catch (err) {
    dispatch({ type: ERROR, payload: "error" });
  } finally {
    dispatch(stopLoading());
  }
};

// export const findStory = id => async dispatch=>{
//   try{
//     dispatch(setLoading());
//     const res = await storiesApi.get({tags:`story_:${id}`});
//     console.log(res)
//     // dispatch({type:SET_STORY, payload:res.hits});
//   }
//   catch(err){
//     dispatch({ type: ERROR, payload: "error" })
//   }
//   finally {
//     dispatch(stopLoading());
//   }
// };


export const getSearch = (input) => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await storiesApi.get({query:input,tags:"story"});
    console.log(res)
    dispatch({
      type:FETCH, 
      payload:{stories:res.hits, totalPages:res.nbPages}});
  } catch (err) {
    dispatch({ type: ERROR, payload: "error" });
  } finally {
    dispatch(stopLoading());
  }
};
