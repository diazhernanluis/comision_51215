import jwt from 'jsonwebtoken';

const generarToken = (nombre) => {
    return jwt.sign({nombre: nombre}, "palabraUltraSecreta", {
        expiresIn: '1h',
    });
}

const auth = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.headers['authorization'];

    if(!token) {
        return res.status(401).send("Acceso no autorizado!");
    } else {
        try {
            const decoded = jwt.verify(token, "palabraUltraSecreta");
            req.user = decoded;
            next();
        } catch (e) {
            console.log("Error: ", e);
            return res.status(500).send("Error al decodificar el token");
        }
    }
}

export {
    generarToken,
    auth
}