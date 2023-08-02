// RECOMENDACION: Instalar artillery de manera global: npm i -g artillery

// corremos artillery con la siguiente linea de comandos:
// artillery quick --count 10 --num 50 "http://localhost:8080/operacioncompleja" -o archivoDeSalida.json

import express from "express";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/operacionsencilla', (req, res) => {
    let sum = 0;
    for (let i = 0; i < 200000; i++) {
        sum += i;
    };

    res.send({sum});
});

app.get('/operacioncompleja', (req, res) => {
    let sum = 0;
    for (let i = 0; i < 5e9; i++) {
        sum += i;
    };

    res.send({sum});
});

app.listen(PORT, () => {
    console.log("running on port: ", PORT);
})