const express = require("express");
const userRouter = require('./user.routes.js');

const indexRouter = express.Router();

indexRouter.use('/v1/api/user', userRouter);

module.exports = indexRouter;