import express from "express";
import { signin } from "../controllers/usuarios.js";

const router = express.Router();


router.get('/login', signin);



export default router;