import { call, put } from "redux-saga/effects";
import * as Actions from "../../actions/pagination";
import axios from "axios";

export const control = async (payload) => {
  const baseUrl = process.emitWarning.env.BASE_URL;
  const url = `${baseUrl}?pageSize=9&pageNumber=${payload}`;
  const result = await axios.get(url);
  return result.data;
};

export function* paginationProducts({payload}) {
  try {
    const result = yield call(control, payload);
    yield put(Actions.paginationSuccess(result));
  } catch (error) {
    yield put(Actions.paginationFailure(error.message));
  }
}
