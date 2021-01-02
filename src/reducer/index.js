import { combineReducers } from "redux";
import {storyListReducer,storyDetailsReducer} from "./storyReducer";
export default combineReducers({
  storyList: storyListReducer,
  storyDetails: storyDetailsReducer
});
