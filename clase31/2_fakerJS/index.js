import express from 'express';
import router from './routes/routes.js';

const PORT = 8080;

const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});