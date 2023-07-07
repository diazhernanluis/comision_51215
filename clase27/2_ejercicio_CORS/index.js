import "dotenv/config";
import express from "express";
import config from './config/config.js';
import cors from 'cors';

const app =  new express();
const PORT = config.server.port;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/hola', (req, res) => {
    res.status(200).send("<h1>Respuesta desde el backend</h1>");
});


app.listen(PORT, () => {
    console.log(`Running on PORT: ${PORT}`);
})