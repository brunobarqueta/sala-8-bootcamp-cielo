import { faker } from "@faker-js/faker";
import { paginationFailure, paginationRequired, paginationSuccess } from "./";
import { productFake } from "../../mocks/product_fake";

describe("Actions", () => {
  it("Should return type required pagination", () => {
    const page = faker.number.int()
    const result = paginationRequired(page);
    expect(result).toEqual({ type: "pagination_required", payload: page });
  });
  it("Should return failed list type", () => {
    const error = faker.lorem.sentence(5);
    const result = paginationFailure(error);
    expect(result).toEqual({ type: "pagination_failure", payload: error });
  });
  it("Should return success list type", () => {
    const result = paginationSuccess([productFake]);
    expect(result).toEqual({
      type: "pagination_success",
      payload: [productFake],
    });
  });
});
