// RECOMENDACION: Instalar artillery de manera global ( npm i -g artillery )
// pruebas rapidas a endpoints: artillery --quick --count 10 --num 50 "http://localhost:8080/" -o archivoDeSalida.json

// Para correr el archivo .yml que creamos con un escenario:
// artillery run nombreDelArchivo.yml --output archivoDeSalida.json

// artillery report nombreDelArchivo -o archivoDeSalida.html

import 'dotenv/config.js';
import express from "express";
import config from './config/config.js';
import router from './routes/indexRoutes.js';

const app = express();
const PORT = config.server.port;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);

app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`);
    console.log(`running on cs: ${config.db.cs}`);
});