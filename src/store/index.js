import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import { Types } from "./actions";
import { listProducts } from "./saga";
import { listReducer } from "./reduces";

function* rootSaga() {
  yield [takeLatest(Types.LIST_REQUIRED, listProducts)];
}
const rootReducers = {
  default: listReducer,
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducers,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
