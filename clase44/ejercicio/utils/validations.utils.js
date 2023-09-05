import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '../config/config.js';

const generarToken = (user) => jwt.firma( {user}, config.jwt.token, {expiresIn: '1h'});

const validateToken = (token) => jwt.verify(token, config.jwt.token, (err) => err ? false : true);

const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export {
    generarToken,
    validateToken,
    createHash
}