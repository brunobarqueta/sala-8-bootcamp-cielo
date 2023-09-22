import { call, put } from "redux-saga/effects";
import {faker} from '@faker-js/faker'

import { productFake } from "../../mocks/product_fake";
import * as Actions from "../../actions/search";
import { control, searchProducts } from ".";

describe("Saga", () => {
  const payload = faker.number.int()
  const gen = searchProducts({ payload });
  it("Should call the control function", () => {
    const current = gen.next(control, payload);

    expect(current.value).toEqual(call(control, payload));
  });
  it("Should call the success action", () => {
    const current = gen.next([productFake]);

    expect(current.value).toEqual(put(Actions.searchSuccess([productFake])));
  });
  it("Should call the failure action", () => {
    const current = gen.throw(new Error("error"));

    expect(current.value).toEqual(put(Actions.searchFailure("error")));
  });
});
