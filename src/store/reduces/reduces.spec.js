import { faker } from '@faker-js/faker'
import * as Actions from '../actions'
import {productFake} from '../mocks/product_fake'
import { listReducer } from "./";

describe('Reduces', () => {
    const initialState = {
      load: false,
      list: [],
      error: "",
    };
  it("Should return initial state as default", () => {
    const result = listReducer(initialState, {type:''})
    expect(result).toEqual(initialState)
  });
  it("Should return state with load true", () => {
    const result = listReducer(initialState, Actions.listRequired());
    expect(result).toEqual({
      load: true,
      list: [],
      error: "",
    });
  });
  it("Should return state with error", () => {
    const error = faker.lorem.sentence(5)
    const result = listReducer(initialState, Actions.listFailure(error));
    expect(result).toEqual({
      load: false,
      list: [],
      error: error,
    });
  });
  it("Should return state with product list", () => {
    const result = listReducer(initialState, Actions.listSuccess([productFake]));
    expect(result).toEqual({
      load: false,
      list: [productFake],
      error: "",
    });
  });
});
