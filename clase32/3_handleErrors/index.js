import express from "express";
import router from './router/user.js';
import errorHandler from "./middlewares/error/info.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);
app.use(errorHandler);

app.listen(8080, () => {
    console.log('Running');
});
