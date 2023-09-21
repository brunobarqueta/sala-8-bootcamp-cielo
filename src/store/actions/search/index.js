import * as Types from '../../types/search'
export const searchRequired = (searchLetter, pageNumber) => {
  const page = !pageNumber ? 1 : pageNumber;
  const search = !searchLetter ? '' : `&search=${searchLetter}`
  return {
    type: Types.SEARCH_REQUIRED,
    payload: { search, page },
  };
};

export const searchFailure = (payload) => ({
  type: Types.SEARCH_FAILURE,
  payload,
});

export const searchSuccess = (payload) => ({
  type: Types.SEARCH_SUCCESS,
  payload,
});