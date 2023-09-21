import * as Types from '../../types/pagination'
export const paginationRequired = (payload) => ({
  type: Types.PAGINATION_REQUIRED,
  payload
});

export const paginationFailure = (payload) => ({
  type: Types.PAGINATION_FAILURE,
  payload,
});

export const paginationSuccess = (payload) => ({
  type: Types.PAGINATION_SUCCESS,
  payload,
});