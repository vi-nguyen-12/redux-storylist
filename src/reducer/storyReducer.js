import produce from "immer";
import {
  SET_LOADING,
  FETCH,
  ERROR,
  STOP_LOADING,
  CHANGE_PAGE
} from "actions/types";
const INIT_STATE = {
  stories: [],
  loading: false,
  error: null,
  pageNumber: 1,
  numberOfPages: 1,
  storiesPerPage: 5
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
      draft.stories = [...payload.list]; //tai sao k match vao @@
      draft.numberOfPages = payload.numOfPages;
      break;
    case CHANGE_PAGE:
      draft.pageNumber = payload;
  }
}, INIT_STATE);
export default storyReducer;
