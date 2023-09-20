import { faker } from "@faker-js/faker";

export const productFake = {
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  avatar: faker.image.url(),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(),
  rating: faker.number.float({ min: 1.0, max: 5.0 }),
  category: faker.commerce.department(),
};
