// Con base en lo aprendido de los loggers

// Configurar el primer logger (devLogger) para que cuente con un transporte Console a nivel Verbose.
// Crear además un logger (prodLogger) para que cuente con un transporte Console a nivel http y un transporte File a nivel warn
// Configurar el middleware que setea el logger en el objeto req, para que coloque el devLogger, o el prodLogger según sea el entorno.
// Corroborar los logs en múltiples entornos y analizar el comportamiento.

import 'dotenv/config.js';
import express from "express";
import config from './config/config.js';
import log from './config/customLogger.js';

const app = express();
const PORT = config.server;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', (req, res) => {
    try {
        const num1 = parseInt(req.body.num1);
        const num2 = parseInt(req.body.num2);

        const result = num1 + num2;

        if( result < 100) {
            throw new Error("El resultado debe ser mayor a 100");
        } else {
            res.status(200).send(result);
            log.warn(`un texto en Warning`);
            log.info(`Resultado de la suma: ${result}`);
            log.debug('debug, se usa para tracear, color blanco');
        }
    } catch (e) {
        res.status(500).send("Error");
        log.error('Error del tipo Error, deberia ser en magenta')
    }
});

app.listen(PORT, () => {
    console.log("running on port: ", PORT);
})