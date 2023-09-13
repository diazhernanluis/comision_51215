import * as userServices from '../services/users.services.js';
import { createHash, generarToken, validateToken } from '../utils/validations.utils.js';
import { sendRecoverPassword } from '../utils/mail.utils.js';
import log from '../config/logger.js';

const getAllUsers = async (req, res) => {
    try {        
        const result = await userServices.getAll();
        res.status(200).send(result);
    } catch (e) {
        log.error("Error: ", e);
        res.status(500).send("Error interno!");
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    if(!id) {
        return res.status(400).send("Id es mandatorio!");
    }

    try {
        const result = await userServices.getUserByID(id);
        res.status(200).send(result);
    } catch (e) {
        log.error("Error: ", e);
        res.status(500).send("Error interno!");
    }
}

const insertUser = async (req, res) => {
    log.info("req.body: ", req.body);
    try {
        const result = await userServices.create(req.body);
        log.info("result: ", result);
        res.status(200).send(result);
    } catch (e) {
        log.error("Error: ", e);
        res.status(500).send("Error interno!");
    }
}

const updateUser = async (req, res) => {
    const { id } = req.query;
    if(!id) {
        return res.status(400).send("Id es mandatorio");
    }

    try {
        const result = await userServices.updateUserById(id, req.body);
        res.status(200).send(result);
    } catch (e) {
        log.error("Error: ", e);
        res.status(500).send("Error interno!");
    }
}

const passwordRecover = async (req, res) => {
    const { correo } = req.body;

    if(!correo) {
        return res.status(404).send("Correo no enviado");
    }

    try {
        const user = await userServices.getUserByEmail(correo);
        
        if(!user) {
            return res.status(404).send("Usuario no existente!");
        }

        const token = generarToken(correo);
        sendRecoverPassword(correo, token);
        res.status(200).send("Reseto de contraseña enviada!");
    } catch (e) {
        console.log("Error: ", e);
        res.status(500).send("Error interno!");
    }
}

const recoverPassword = (req, res) => {
    const { token } = req.query;
    const { correo } = req.body;
    try {
        const checkToken = validateToken(token);
        if(!checkToken) {
            log.info("Invalid token");
            return res.status(401).send("Acceso denegado!");
        }

        const newToken = generarToken(correo);
        
        // enviarlo dentro de un json y tomarlo en la pagina donde se reseta la contraseña!
        res.status(200).send(`Enviar a la pagina para resetar la contraseña!, token: ${newToken}`);

    } catch (e) {
        log.error("Error: ", e);
        res.status(500).send("Error interno!");
    }

}

const resetPassword = async (req, res) => {
    const { correo, password} = req.body;

    try {
        const hashedPassword = await createHash(password);
        await userServices.updatePasswordByEmail(correo, hashedPassword);

        res.status(200).send("Contraseña modificada correctamente");
    } catch (e) {
        log.error("Error: ", e);
        res.status(500).send("Error interno!");
    }
    
}

export {
    getAllUsers,
    getUserById,
    insertUser,
    updateUser,
    passwordRecover,
    recoverPassword,
    resetPassword
}