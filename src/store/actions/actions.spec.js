import { faker } from "@faker-js/faker";
import { listFailure, listRequired, listSuccess } from "./";

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
    const productFake = {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      avatar: faker.image.url(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      rating: faker.number.float({min: 1.0, max: 5.0}),
      category: faker.commerce.department()
    }
    const result = listSuccess([productFake]);
    expect(result).toEqual({ type: "list_success", payload: [productFake] });
  });
});
