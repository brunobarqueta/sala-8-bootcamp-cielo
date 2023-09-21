import { call, put } from "redux-saga/effects";

import { productFake } from "../../mocks/product_fake";
import * as Actions from "../../actions/list";
import { control, listProducts } from "./";

describe("Saga", () => {
  const gen = listProducts();
  it("Should call the control function", () => {
    const current = gen.next(control);

    expect(current.value).toEqual(call(control));
  });
  it("Should call the success action", () => {
    const current = gen.next([productFake]);

    expect(current.value).toEqual(put(Actions.listSuccess([productFake])));
  });
  it("Should call the failure action", () => {
    const current = gen.throw(new Error("error"));

    expect(current.value).toEqual(put(Actions.listFailure("error")));
  });
});
