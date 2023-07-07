import 'dotenv/config';
import express from 'express';
import config from './config/config.js';
import MongoSingleton from './dbConnect.js';

const app = express();
const PORT = config.server.port;
const CS = config.db.cs;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

setTimeout( () => {
    console.log("TIEMPO DE ESPERA");

    const coneccion1 = MongoSingleton.getInstance();
    const estoesotraconeccion = MongoSingleton.getInstance();
}, 2000);

app.listen( PORT, () => {
    console.log(`running on PORT: ${PORT}`);
    console.log(`running on CS: ${CS}`);
});


