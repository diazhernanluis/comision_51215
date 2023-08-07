// para traer mongo
// docker pull mongo

// docker create -p 27017:27017 --name mongoberto -e MONGO_INITDB_ROOT_USERNAME=cosme -e MONGO_INITDB_ROOT_PASSWORD=fulanito mongo

// docker start mongoberto

// para levantar el node, igual que en el ejercicio anterior

import 'dotenv/config.js';
import express from "express";
import config from './config/config.js';
import {conection} from './config/dbConnect.js';
import productos from './models/schemas/productos.js';
import { generateProducts } from './mocks/generateProducts.js';

const app = express();
console.log(config.db.cs)
app.get('/', (req, res) => {
    res.status(200).send("RUNNING");
});


app.get('/productos', async (req, res) => {
    const result = await productos.find();
    res.status(200).send(result);
});

app.post('/productos', async (req, res) => {
    const mockProducto = generateProducts();
    const result = await productos.create(mockProducto);
    res.status(200).send(result);
});

app.listen(config.server.port, async () => {
    await conection();
    console.log(`Runing on port: ${config.server.port}`);
})