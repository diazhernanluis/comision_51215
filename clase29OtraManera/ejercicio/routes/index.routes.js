import express from "express";
import businessRouter from './business.routes.js';
import userRouter from './user.routes.js';
import orderRouter from './order.routes.js';

const indexRouter = express.Router();

indexRouter.use('/v1/api/user', userRouter);
indexRouter.use('/v1/api/business', businessRouter);
indexRouter.use('/v1/api/order', orderRouter);

export default indexRouter;