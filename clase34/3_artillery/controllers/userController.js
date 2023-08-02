import userDAO from "../models/DAO/userDAO.js";
const user = new userDAO();
import { createHash, passwordValidation } from "../utils/utils.js";

const getAllUsers = async (req, res) => {
    const result = await user.getall();
    res.status(200).send(result);
};

const register = async (req, res) => {
    const {nombre, apellido, email, password} = req.body;
    if( !nombre || !apellido || !password) {
        return res.status(400).send("falta algun dato");
    }

    const exists = await user.getUserByEmail(email);
    if(exists) {
        return res.status(400).send("Usuario ya existente");
    }
    const hashedPassword = await createHash(password);
    const newUser = {
        nombre,
        apellido,
        email,
        password: hashedPassword
    }

    await user.create(newUser);
    res.status(200).send("Usuario creado");
};

const login = async (req, res) => {
    const {email, password} = req.body;
    if( !email || !password) {
        return res.status(400).send("falta algun dato");
    }

    const searchUser = await user.getUserByEmail(email);

    if(!searchUser){
        return res.status(400).send("El usuario no existe");
    }

    const isValidPassword = await passwordValidation(password, searchUser);
    if(!isValidPassword) {
        return res.status(400).send("Password inconrrecto");
    }

    console.log("Logueado");
    res.status(200).send("Logueado");
};

export {
    getAllUsers,
    register,
    login
}