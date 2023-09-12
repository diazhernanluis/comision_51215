import express from "express";
import cors from 'cors';
import carrito from './routes/carrito.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use(carrito);

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});