import 'dotenv/config';
import config from './config/config.js';
import express from "express";
import operacionesRouter from './routes/operaciones.router.js';
import usuariosRouter from './routes/usuarios.router.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(operacionesRouter);
app.use(usuariosRouter);


const PORT = config.server;

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
})