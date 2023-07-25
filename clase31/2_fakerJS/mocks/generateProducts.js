import { fakerES as faker} from "@faker-js/faker";


export const generateProducts = () => {
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        stock: faker.string.numeric(5),
        id: faker.database.mongodbObjectId(),
        image: faker.image.url(),
        code: faker.string.alphanumeric(10),
        description: faker.lorem.paragraph()
    }
}