import express from "express";
import { suma, resta, multiplicar, dividir, historial } from "../controllers/operacionesController.js";
import { auth } from "../middlewares/jwt.js";


const router = express.Router();

router.get('/suma', suma);

router.get('/resta', resta);

router.get('/mult', multiplicar);

router.get('/div', dividir);

router.get('/historial', auth, historial);




export default router;