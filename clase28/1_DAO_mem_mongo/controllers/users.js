// import usersDaoMongo from "../models/DAO/mongo.js";
import usersDaoRam from '../models/DAO/ram.js';

// const userDB = new usersDaoMongo();
const userDB = new usersDaoRam();

const getAllUsers = async (req, res) => {
    const result = await userDB.getAll();
    res.status(200).send(result);
}

const insertUser = async (req, res) => {
    const result = await userDB.insert(req.body);
    res.status(200).send(result);
}

const updateUser = async (req, res) => {
    const { id } = req.query;
    const result = await userDB.updateById(id, req.body);
    res.status(200).send(result);
}

const deleteUser = async (req, res) => {
    const { id } = req.query;
    // const result = await userDB.deleteById(id);
    const result = id;
    res.status(200).send(result);
}

export {
    getAllUsers,
    insertUser,
    updateUser,
    deleteUser,
}