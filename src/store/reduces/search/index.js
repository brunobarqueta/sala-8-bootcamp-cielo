import * as Types from '../../types/search'
import { initialState } from "../..";

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SEARCH_REQUIRED:
      return { ...state, load: true, error: '' };
    case Types.SEARCH_FAILURE:
      return { ...state, error: action.payload, load: false, list: [] };
    case Types.SEARCH_SUCCESS:
      return { ...state, list: action.payload, load: false, error: '' };
    default:
      return { ...state };
  }
};
