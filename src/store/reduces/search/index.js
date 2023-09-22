import * as Types from '../../types/search'
import { initialState } from "../..";

export const searchReducer = (state = initialState, action) => {
  state.search = "";
  const search = action.payload?.search
    ? action.payload.search.split("=")[1]
    : "";
  switch (action.type) {
    case Types.SEARCH_REQUIRED:
      return {
        ...state,
        load: true,
        error: "",
        search,
      };
    case Types.SEARCH_FAILURE:
      return { ...state, error: action.payload, load: false, list: [], search: "" };
    case Types.SEARCH_SUCCESS:
      state.search = "";
      return {
        ...state,
        list: action.payload,
        load: false,
        error: "",
        search,
      };
    default:
      return { ...state };
  }
};
