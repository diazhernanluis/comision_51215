import express from "express";
import * as libreria from "libreriacoderhouse";
const PORT = 8080;
const app = express();


app.get('/', (req, res) => {
    res.status(200).send("Testeando la mejor libreria del mundo!");
    libreria.mostrarMensaje("Un re mensaje");
});

app.get('/suma', (req, res) => {
    let {num1, num2} = req.query;
    const resultado = libreria.suma(num1, num2);
    res.status(200).send(`Resultado de la suma: ${resultado}`);
});

app.get('/resta', (req, res) => {
    let {num1, num2} = req.query;
    const resultado = libreria.resta(num1, num2);
    res.status(200).send(`Resultado de la resta: ${resultado}`);
});

app.get('/multiplicacion', (req, res) => {
    let {num1, num2} = req.query;
    const resultado = libreria.multiplicacion(num1, num2);
    res.status(200).send(`Resultado de la multiplicacion: ${resultado}`);
});

app.get('/division', (req, res) => {
    let {num1, num2} = req.query;
    const resultado = libreria.division(num1, num2);
    res.status(200).send(`Resultado de la division: ${resultado}`);
});

app.listen(PORT, () => {
    console.log("Running");
});