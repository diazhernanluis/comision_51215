import express from "express";
import { getAllUsers, insertUser, updateUser, deleteUser } from "../controllers/users.js";


const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', insertUser);
router.put('/users', updateUser);
router.delete('/users', deleteUser);


export default router;