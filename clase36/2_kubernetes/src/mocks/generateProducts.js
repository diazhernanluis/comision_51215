import { fakerES as faker } from "@faker-js/faker"

export const generateProducts = () => {
    return {
        titulo: faker.commerce.productName(),
        descripcion: faker.lorem.paragraph(),
        precio: faker.commerce.price(),
        stock: faker.string.numeric(5),
    }
}