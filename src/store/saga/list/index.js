import { call, put } from "redux-saga/effects";
import * as Actions from "../../actions/list";
import axios from "axios";

export const control = async () => {
  const baseUrl = process.emitWarning.env.BASE_URL;
  const url = `${baseUrl}?pageSize=9&pageNumber=1`;
  const result = await axios.get(url);
  return result.data;
};

export function* listProducts() {
  try {
    const result = yield call(control);
    yield put(Actions.listSuccess(result));
  } catch (error) {
    yield put(Actions.listFailure(error.message));
  }
}
