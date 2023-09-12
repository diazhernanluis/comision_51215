import { Router} from 'express';
import { carrito } from '../controller/carrito.js';
const router = Router();

router.post('/api/payments/payment-intents', carrito);

export default router;