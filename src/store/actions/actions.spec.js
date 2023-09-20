import { faker } from "@faker-js/faker";
import { listFailure, listRequired, listSuccess } from "./";
import { productFake } from "../mocks/product_fake";

describe("Actions", () => {
  it("Should return type required list", () => {
    const result = listRequired();
    expect(result).toEqual({ type: "list_required" });
  });
  it("Should return failed list type", () => {
    const error = faker.lorem.sentence(5);
    const result = listFailure(error);
    expect(result).toEqual({ type: "list_failure", payload: error });
  });
  it("Should return success list type", () => {
    const result = listSuccess([productFake]);
    expect(result).toEqual({ type: "list_success", payload: [productFake] });
  });
});
