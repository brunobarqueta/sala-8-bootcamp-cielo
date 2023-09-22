import { call, put } from "redux-saga/effects";
import * as Actions from "../../actions/search";
import axios from "axios";

console.log(import.meta.env.VITE_BASE_URL);

export const control = async (payload) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const url = `${baseUrl}?pageSize=9&pageNumber=${payload.page}${payload.search}`;
  const result = await axios.get(url);
  return result.data;
};

export function* searchProducts({payload}) {
  try {
    const result = yield call(control, payload);
    yield put(Actions.searchSuccess(result));
  } catch (error) {
    yield put(Actions.searchFailure(error.message));
  }
}
