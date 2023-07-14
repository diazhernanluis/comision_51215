import 'dotenv/config';
import express from 'express';
import indexRouter from './routes/index.routes.js';
import config from './config/config.js';
const PORT = config.server;

const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(indexRouter);

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});