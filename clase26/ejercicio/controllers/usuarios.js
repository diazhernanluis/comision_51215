import { generarToken } from '../middlewares/jwt.js';

const signin = (req, res) => {
    const { nombre } = req.body;
    const token = generarToken(nombre);
    res.status(200).json({
        "x-access-token" : token
    });
}

export {
    signin
}