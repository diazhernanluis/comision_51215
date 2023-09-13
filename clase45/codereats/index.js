import 'dotenv/config';
import express from 'express';
import indexRouter from './routes/index.routes.js';
import config from './config/config.js';
import cors from 'cors';
import {conection} from './config/dbConnect.js';
import log from './config/logger.js';
import __dirname from './__dirname.js';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';

const PORT = config.server;

const app = new express();


// SWAGGER CONFIG!
const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: "Documentacion API - CODEREATS!",
            description: "codereats api!"
        }
    },
    apis: [`${__dirname}/docs/**/*.yaml`]
};

const spec = swaggerJSDoc(swaggerOptions);
app.use('/apidocs', swaggerUiExpress.serve, swaggerUiExpress.setup(spec));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(indexRouter);

app.listen(PORT, () => {
    conection();    
    log.info(`Running on port: ${PORT}`);
});