const express = require('express');
const { getAllUsers, 
         getUserById,
         insertUser,
         updateUser,
         passwordRecover,
         recoverPassword,
         resetPassword } = require('../controllers/userController.js');

const { isUserOrTokenValid, checkRol} = require('../middlewares/user.middlewares.js');

const userRouter = express.Router();


userRouter.get('/', getAllUsers);

userRouter.get('/passwordRecover', passwordRecover);
userRouter.get('/recoverPassword', recoverPassword);

userRouter.get('/:id', getUserById);

userRouter.post('/', checkRol, insertUser);
userRouter.post('/resetPassword', isUserOrTokenValid ,resetPassword);

userRouter.put('/', updateUser);

module.exports = userRouter