import express from 'express';
import customError from '../services/errors/customError.js';
import EErors from '../services/errors/enums.js';
import {generateUserErrorInfo} from "../services/errors/info.js";

const users = [];

const router = express.Router();

router.get('/', async (req, res) => {
    
    res.status(200).send(200);
});

router.get('/conid', async (req, res) => {
    const { id } = req.body;
    if(!id) {
        customError.createError({
            name: "Id erronea",
            cause: 'Params errors - falta Id',
            message: "Error intentando acceder a /:id",
            code: EErors.INVALID_PARAM
        })
    }
    res.status(200).send(200);
});

router.post('/', (req, res) => {
    const { nombre, apellido, edad, email } = req.body;
        
    if(!nombre || !apellido || !email) {
        customError.createError({
            name: "User creation error",
            cause: generateUserErrorInfo({nombre, apellido, email}),
            message: "Error intentando crear el usuario",
            code: EErors.INVALID_TYPE_ERROR
        })
    }
    

    const user = {
        nombre,
        apellido,
        edad,
        email
    };

    user.id = (users.length === 0) ? 1 : users.length + 1;

    users.push(user);
    res.status(200).send(users);
});

router.all('*', (req, res) => {
    customError.createError({
        name: "Error de ruteo",
        cause: 'Error de ruteo - terminal',
        message: "error intentando acceder a una url",
        code: EErors.ROUTING_ERROR
    })
})

export default router