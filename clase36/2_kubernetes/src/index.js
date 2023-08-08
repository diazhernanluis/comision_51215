// para subir a dockerhub!!

// Primer buildeamos nuestra app con el dockerfile:

// docker build -t __nombreDeLaImagen__ . (el punto hace referncia a que tenemos un archivo dockerfile
//                                          en el mismo lugar donde estamos parados con la terminal)

// docker login
// docker tag __nombreDeLaImagen__ __usuario/nombreDeLaImagen:version__
// docker push __usuario/nombreDeLaImagen:version__

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