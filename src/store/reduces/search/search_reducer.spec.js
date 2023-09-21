import { faker } from "@faker-js/faker";
import * as Actions from "../../actions/search";
import { productFake } from "../../mocks/product_fake";
import searchReducer from ".";

describe("Reduces", () => {
  const initialState = {
    load: false,
    list: [],
    error: "",
  };
  it("Should return initial state as default", () => {
    const result = searchReducer(initialState, { type: "" });
    expect(result).toEqual(initialState);
  });
  it("Should return state with load true", () => {
    const search = faker.lorem.word(3)
    const result = searchReducer(
      initialState,
      Actions.searchRequired(search)
    );
    expect(result).toEqual({
      load: true,
      list: [],
      error: "",
    });
  });
  it("Should return state with error", () => {
    const error = faker.lorem.sentence(5);
    const result = searchReducer(initialState, Actions.searchFailure(error));
    expect(result).toEqual({
      load: false,
      list: [],
      error: error,
    });
  });
  it("Should return state with product list", () => {
    const result = searchReducer(
      initialState,
      Actions.searchSuccess([productFake])
    );
    expect(result).toEqual({
      load: false,
      list: [productFake],
      error: "",
    });
  });
});
