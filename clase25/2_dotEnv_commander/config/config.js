import dotenv from 'dotenv';
import { Command } from 'commander';
import __dirname from '../dirname.js';

const program = new Command();

program
.option('--name', 'nombre del ambiente')
.requiredOption('--mode <item>', 'ambiente de trabajo actual');

program.parse();

let options = program.opts();
console.log("MODE: ", options.mode);

if(options.mode === "d") {
    dotenv.config({path: __dirname + '/.env.development'});
} else if (options.mode === "p") {
    dotenv.config({path: __dirname + '/.env.production'});
}

let config = {};

config.server = {
    port: process.env.PORT,
    mongo: process.env.MONGO_URL
}

export default config;