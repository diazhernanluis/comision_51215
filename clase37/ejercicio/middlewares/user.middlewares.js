import { validateToken } from "../utils/validations.utils.js";


const isUserOrTokenValid = (req, res, next) => {
    if(req.user) {
        return next();
    }

    const authToken = req.headers.authorization;
    const checkToken = validateToken(authToken);

    if(checkToken) {
        return next();
    }

    return res.status(401).send("No autorizado!");
}

export {
    isUserOrTokenValid
}