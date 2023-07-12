// Basado en la implementación del repository de Contactos

// Crear un DAO para productos (que sólo implemente el get, puede ser en memoria o en MongoDB.)
// Crear un Repositorio producto (que sólo implemente el get)
// Conectar el Repositorio al DAO en el archivo index de services.
// Crear un Router productos (que importe el Repositorio)
// Corroborar que al mandar a llamar al router, devuelva un arreglo vacío (indicando que sí se pudo acceder a la persistencia).


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