import { fakerES as faker } from "@faker-js/faker";


export const generateUsers = () => {

    return {
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        sex: faker.person.gender(),
        image: faker.internet.avatar(),
        emoji: faker.internet.emoji(),
        id: faker.database.mongodbObjectId(),
        email: faker.internet.email(),
        premium: faker.datatype.boolean(),
    }
};