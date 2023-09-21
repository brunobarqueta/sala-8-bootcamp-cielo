import { faker } from "@faker-js/faker";
import { searchFailure, searchRequired, searchSuccess } from ".";
import { productFake } from "../../mocks/product_fake";

describe("Actions", () => {
  it("Should return type required search without page", () => {
    const search = faker.lorem.word(3);
    const result = searchRequired(search);
    expect(result).toEqual({
      type: "search_required",
      payload: { search, page: 1 },
    });
  });
  it("Should return type required search with page", () => {
    const search = faker.lorem.word(3);
    const page = faker.number.int();
    const result = searchRequired(search, page);
    expect(result).toEqual({ type: "search_required", payload: {search, page} });
  });
  it("Should return failed list type", () => {
    const error = faker.lorem.sentence(5);
    const result = searchFailure(error);
    expect(result).toEqual({ type: "search_failure", payload: error });
  });
  it("Should return success list type", () => {
    const result = searchSuccess([productFake]);
    expect(result).toEqual({
      type: "search_success",
      payload: [productFake],
    });
  });
});
