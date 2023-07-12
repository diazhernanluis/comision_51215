// Se creará un DAO para contactos que trabaje con una fuente de datos de MongoDB. Además, 
// se creará un DAO para contactos que trabaje con una fuente de datos de memoria.

// Intercambiar imports y corroborar que la obtención de datos se mantiene sólida desde negocio

import "dotenv/config";
import express from "express";
import config from "./config/config.js";
import router from './routes/index.js';


const app = new express();
const PORT = config.server;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);


app.listen( PORT, () => {
    console.log(`RUNNING on port: ${PORT}`);
});