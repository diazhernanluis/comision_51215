import { fakerES as faker } from "@faker-js/faker";
import { generateProducts } from "./generateProducts.js";


export const generateUsers = () => {

    // let numOfProducts = parseInt(faker.string.numeric(1));
    
    // let products = [];

    // for (let i = 0; i < numOfProducts; i++) {
    //     products.push(generateProducts());
    // }
    return {
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        sex: faker.person.gender(),
        image: faker.internet.avatar(),
        emoji: faker.internet.emoji(),
        id: faker.database.mongodbObjectId(),
        email: faker.internet.email(),
        premium: faker.datatype.boolean(),
        product: generateProducts(),
    }
};