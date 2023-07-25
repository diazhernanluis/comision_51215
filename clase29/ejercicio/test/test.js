import { generateUsers } from "./mocks/generateUsers.js";
import userDao from "../models/DAO/usersDAO.js";
const user = new userDao();

( async () => {
    console.log("Test DB");
    const newUser = generateUsers();
    const result = await user.create(newUser);
    console.log("newUser: ", newUser);
    console.log("Result: ", result);
})()