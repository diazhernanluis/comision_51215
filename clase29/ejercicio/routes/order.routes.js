import express from 'express';
import { getAllOrdes, getorderById, createOrder, resolveORder} from '../controllers/orderController.js';

const orderRouter = express.Router();


orderRouter.get('/', getAllOrdes);

orderRouter.get('/:id', getorderById);

orderRouter.post('/', createOrder);

orderRouter.put('/resolveOrder/:id', resolveORder);

export default orderRouter