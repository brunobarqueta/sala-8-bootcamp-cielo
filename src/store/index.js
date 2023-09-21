import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import { all, takeLatest } from "redux-saga/effects";
import { LIST_REQUIRED } from "./types/list";
import { PAGINATION_REQUIRED } from "./types/pagination";
import { SEARCH_REQUIRED } from "./types/search";
import { listReducer }  from "./reduces/list";
import { paginationReducer } from "./reduces/pagination";
import { searchReducer } from "./reduces/search";
import { listProducts } from "./saga/list";
import { paginationProducts } from "./saga/pagination";
import { searchProducts } from "./saga/search";

export const initialState = {
  load: false,
  list: [],
  error: "",
};
function* rootSaga() {
  yield all([
    takeLatest(LIST_REQUIRED, listProducts),
    takeLatest(PAGINATION_REQUIRED, paginationProducts),
    takeLatest(SEARCH_REQUIRED, searchProducts),
  ]);
}
const rootReducers = combineReducers({
  default: listReducer || (() => null),
  pagination: paginationReducer || (() => null),
  search: searchReducer || (() => null),
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducers,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
