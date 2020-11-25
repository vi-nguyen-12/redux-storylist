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
export default (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    case ERROR:
      return {
        ...state,
        error: payload
      };
    case FETCH: {
      {
        console.log(payload.list);
        return {
          ...state,
          stories: [...payload.list], //tai sao k match vao @@
          numberOfPages: payload.numberOfPages
        };
      }
    }
    case CHANGE_PAGE:
      return {
        ...state,
        pageNumber: payload
      };
    default:
      return state;
  }
};
