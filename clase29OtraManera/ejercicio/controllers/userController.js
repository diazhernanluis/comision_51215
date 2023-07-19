import * as userServices from '../services/users.services.js';

const getAllUsers = async (req, res) => {
    const result = await userServices.getAll();
    res.status(200).send(result);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    if(!id) {
        return res.status(400).send("Id es mandatorio!");
    }

    const result = await userServices.getUserByID(id);
    res.status(200).send(result);
}

const insertUser = async (req, res) => {
    const result = await userServices.create(req.body);
    res.status(200).send(result);
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    if(!id) {
        return res.status(400).send("Id es mandatorio");
    }

    const result = await userServices.updateUserById(id, req.body);
    res.status(200).send(result);
}

export {
    getAllUsers,
    getUserById,
    insertUser,
    updateUser
}