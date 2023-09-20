import { faker } from "@faker-js/faker";
import * as Actions from "../../actions/pagination";
import { productFake } from "../../mocks/product_fake";
import { paginationReducer } from ".";

describe("Reduces", () => {
  const initialState = {
    load: false,
    list: [],
    error: "",
  };
  it("Should return initial state as default", () => {
    const result = paginationReducer(initialState, { type: "" });
    expect(result).toEqual(initialState);
  });
  it("Should return state with load true", () => {
    const page = faker.number.int()
    const result = paginationReducer(initialState, Actions.paginationRequired(page));
    expect(result).toEqual({
      load: true,
      list: [],
      error: "",
    });
  });
  it("Should return state with error", () => {
    const error = faker.lorem.sentence(5);
    const result = paginationReducer(initialState, Actions.paginationFailure(error));
    expect(result).toEqual({
      load: false,
      list: [],
      error: error,
    });
  });
  it("Should return state with product list", () => {
    const result = paginationReducer(
      initialState,
      Actions.paginationSuccess([productFake])
    );
    expect(result).toEqual({
      load: false,
      list: [productFake],
      error: "",
    });
  });
});
