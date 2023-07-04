import * as logica from "../services/logica.js";

const suma = (req, res) => {
    let { num1, num2 } = req.query;
    const result = logica.sumar(num1, num2);    
    res.status(200).send(`El resultado de la suma es ${result}`);
}

const resta = (req, res) => {
    let { num1, num2 } = req.query;
    const result = logica.restar(num1, num2);
    res.status(200).send(`El resultado de la resta es ${result}`);
}

const multiplicar = (req, res) => {
    let { num1, num2 } = req.query;
    const result = logica.mult(num1, num2);
    res.status(200).send(`El resultado de la multplicacuib es ${result}`);
}

const dividir = (req, res) => {
    let { num1, num2 } = req.query;
    const result = logica.div(num1, num2);
    res.status(200).send(`El resultado de la division es ${result}`);
}

const historial = async (req, res) => {
    const result = await logica.listar();
    res.status(200).json({
        usuario: req.user,
        operaciones: result
    });
}

export {
    suma,
    resta,
    multiplicar,
    dividir,
    historial
}