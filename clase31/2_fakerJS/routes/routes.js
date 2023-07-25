import express from "express";
import { generateUsers } from "../mocks/generateUsers.js";
const router = express.Router();


router.get('/users', (req, res) => {
    let users = [];
    for (let i = 0; i < 100; i++) {
        users.push(generateUsers());
    }
    res.status(200).send(users);
});

export default router;