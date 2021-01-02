import produce from "immer";
import {
  STORY_LIST_REQUEST,
  STORY_LIST_SUCCESS,
  STORY_LIST_FAIL,
  STORY_DETAILS_REQUEST,
  STORY_DETAILS_SUCCESS,
  STORY_DETAILS_FAIL
} from "actions/types";

export const storyListReducer = produce((draft, { type, payload }) => {
  switch (type) {
    case STORY_LIST_REQUEST:
      draft.loading = true;
      break;
    case STORY_LIST_SUCCESS:
      draft.stories = payload.stories;
      draft.totalPages=payload.totalPages;
      draft.pageNumber=payload.pageNumber;
      draft.loading = false;
      break;
    case STORY_LIST_FAIL:
      draft.error=payload
      draft.loading = false;
      break;
  }
}, {stories:[]});

export const storyDetailsReducer = produce((draft, { type, payload }) => {
  switch (type) {
    case STORY_DETAILS_REQUEST:
      draft.loading = true;
      break;
    case STORY_DETAILS_SUCCESS:
      draft.story = payload.story;
      draft.comments=payload.comments
      draft.loading = false;
      break;
    case STORY_DETAILS_FAIL:
      draft.error=payload
      draft.loading = false;
      break;
  }
}, {story:{},comments:[]});