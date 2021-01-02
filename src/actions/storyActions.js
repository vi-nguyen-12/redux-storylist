import { 
  STORY_LIST_REQUEST,
  STORY_LIST_SUCCESS,
  STORY_LIST_FAIL,
  STORY_DETAILS_REQUEST,
  STORY_DETAILS_SUCCESS,
  STORY_DETAILS_FAIL,

 } from "./types";
import storiesApi from "axios/storiesApi";


export const listStories = (query='',page=1)=> async dispatch => {
  try {
    dispatch({type:STORY_LIST_REQUEST});
    const res=await storiesApi.get({query,tags:"story",page:page-1});
    dispatch({
      type:STORY_LIST_SUCCESS, 
      payload:{stories:res.hits, totalPages:res.nbPages,pageNumber:res.page+1}});
  } catch (err) {
    dispatch({type:STORY_LIST_FAIL})
  } 
};

export const listStoryDetails = (id)=> async dispatch => {
  try {
    dispatch({type:STORY_DETAILS_REQUEST});
    const res1=await storiesApi.get({tags:`story_${id}`})
    const res2=await storiesApi.get({tags:`comment,story_${id}`})

    dispatch({
      type:STORY_DETAILS_SUCCESS, 
      payload:{story:res1.hits[0], comments:res2.hits}})
   }
   catch (err) {
    dispatch({type:STORY_DETAILS_FAIL})
  } 
};
