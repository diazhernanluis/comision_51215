import express from 'express';
import { getAllUsers, getUserById, insertUser, updateUser } from '../controllers/userController.js';

const userRouter = express.Router();


userRouter.get('/', getAllUsers);

userRouter.get('/:id', getUserById);

userRouter.post('/', insertUser);

userRouter.put('/', updateUser);

export default userRouter