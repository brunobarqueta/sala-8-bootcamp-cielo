import * as Types from '../../types/search'
import { initialState } from "../..";

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SEARCH_REQUIRED:
      return { ...state, load: true };
    case Types.SEARCH_FAILURE:
      return { ...state, error: action.payload };
    case Types.SEARCH_SUCCESS:
      // console.log(action.payload)
      return { ...state, list: action.payload };
    default:
      return { ...state };
  }
};
