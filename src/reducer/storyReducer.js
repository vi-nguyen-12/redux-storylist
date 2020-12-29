import produce from "immer";
import {
  SET_LOADING,
  FETCH,
  ERROR,
  STOP_LOADING,
  CHANGE_PAGE,
  SET_STORY
} from "actions/types";
const INIT_STATE = {
  stories: [],
  loading: false,
  error: null,
  story:{}
};
const storyReducer = produce((draft, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      draft.loading = true;
      break;
    case STOP_LOADING:
      draft.loading = false;
      break;
    case ERROR:
      draft.err = payload;
      break;
    case FETCH:
      draft.stories = payload;
      break;
    case CHANGE_PAGE:
      draft.pageNumber = payload;
      break;
    case SET_STORY:
      draft.story=payload;
      break
  }
}, INIT_STATE);
export default storyReducer;
