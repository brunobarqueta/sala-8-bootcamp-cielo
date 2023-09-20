import * as Types from '../../types/pagination'
import { initialState } from "../../";

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.PAGINATION_REQUIRED:
      return { ...state, load: true };
    case Types.PAGINATION_FAILURE:
      return { ...state, error: action.payload };
    case Types.PAGINATION_SUCCESS:
      return { ...state, list: action.payload };
    default:
      return { ...state };
  }
};
