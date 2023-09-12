const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const indexRouter = require('./routes/index.routes.js');
const config = require('./config/config.js');
const {conection} = require('./config/dbConnect.js');
const log = require('./config/logger.js');

const PORT = config.server;

const app = new express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(indexRouter);

app.listen(PORT, () => {
    conection();    
    log.info(`Running on port: ${PORT}`);
});