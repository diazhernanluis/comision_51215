import express from 'express';
import { getAllUsers, 
         getUserById,
         insertUser,
         updateUser,
         passwordRecover,
         recoverPassword,
         resetPassword } from '../controllers/userController.js';

import { isUserOrTokenValid, checkRol, isAdmin } from '../middlewares/user.middlewares.js';

const userRouter = express.Router();


userRouter.get('/', getAllUsers);

userRouter.get('/passwordRecover', passwordRecover);
userRouter.get('/recoverPassword', recoverPassword);

userRouter.get('/:id', getUserById);

userRouter.post('/', checkRol, insertUser);
userRouter.post('/resetPassword', isUserOrTokenValid ,resetPassword);

userRouter.put('/', isAdmin, checkRol, updateUser);

export default userRouter