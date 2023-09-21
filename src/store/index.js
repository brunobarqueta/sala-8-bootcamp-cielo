import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import { takeLatest } from "redux-saga/effects";
import { SEARCH_REQUIRED } from "./types/search";
import { searchReducer } from "./reduces/search";
import { searchProducts } from "./saga/search";

export const initialState = {
  load: false,
  list: [],
  error: "",
};
function* rootSaga() {
  yield takeLatest(SEARCH_REQUIRED, searchProducts);
}
const rootReducers = combineReducers({
  products: searchReducer || (() => null),
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducers,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
