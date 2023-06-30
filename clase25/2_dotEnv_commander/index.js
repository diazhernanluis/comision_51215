// Realizar un servidor basado en node js con express, El cual reciba por flag de cli el comando --mode <modo> y sea procesado por commander.
// Acorde con este argumento, hacer una lectura a los diferentes entornos, y ejecutar dotenv en el path correspondiente a cada modo 
// (--mode development debería conectar con .env.development).
// Para el entorno development, el servidor debe escuchar en el puerto 8080, para el entorno productivo, el servidor debe escuchar en el puerto 3000. 

import dotenv from 'dotenv';
import express from 'express';
import { Command } from 'commander';
import __dirname from './dirname.js';
import path from 'path';

const program = new Command();

program
    .option('--name', 'nombre del ambiente')
    .requiredOption('--mode <item>', 'ambiente de trabajo actual');

program.parse();

let options = program.opts();
console.log("MODE: ", options.mode);

if(options.mode === "d") {
    dotenv.config({path: path.join(__dirname + './.env.development')});
    //require("dotenv").config({path: './.env.production'});
} else if (options.mode === "p") {
    dotenv.config({path: './.env.production'});
    //require("dotenv").config({path: './.env.production'});
}

import config from './config/config.js';

const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.status(200).send(` <h1> PUERTO: ${config.server.port} </h1> </br><h1> MONGO: ${config.server.MONGO_URL} </h1>`);
})
app.listen(config.server.port, () => {
    console.log(`Server running on PORT: ${config.server.port}`);
})