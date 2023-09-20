import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import { LIST_REQUIRED } from "./types/list";
import { PAGINATION_REQUIRED } from "./types/pagination";
import { listReducer } from "./reduces/list";
import { paginationReducer } from "./reduces/pagination";
import { listProducts } from "./saga/list";
import { paginationProducts } from "./saga/pagination";

export const initialState = {
  load: false,
  list: [],
  error: "",
};
function* rootSaga() {
  yield [
    takeLatest(LIST_REQUIRED, listProducts),
    takeLatest(PAGINATION_REQUIRED, paginationProducts),
  ];
}
const rootReducers = combineReducers({
  default: listReducer,
  pagination: paginationReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducers,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
