import 'dotenv/config';
import express from 'express';
import indexRouter from './routes/index.routes.js';
import config from './config/config.js';
import cors from 'cors';
import {conection} from './config/dbConnect.js';
import log from './config/logger.js';

const PORT = config.server;

const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(indexRouter);

app.listen(PORT, () => {
    conection();    
    log.info(`Running on port: ${PORT}`);
});