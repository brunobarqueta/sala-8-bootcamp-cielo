import * as Types from '../../types/list'

export const listRequired = () => ({
  type: Types.LIST_REQUIRED,
});

export const listFailure = (payload) => ({
  type: Types.LIST_FAILURE,
  payload,
});

export const listSuccess = (payload) => ({
  type: Types.LIST_SUCCESS,
  payload,
});