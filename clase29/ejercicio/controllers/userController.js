import userDao from '../models/DAO/usersDAO.js';
const user = new userDao();

const getAllUsers = async (req, res) => {
    const result = await user.getAll();
    res.status(200).send(result);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    if(!id) {
        return res.status(400).send("Id es mandatorio!");
    }

    const result = await user.getUserByID(id);
    res.status(200).send(result);
}

const insertUser = async (req, res) => {
    const result = await user.create(req.body);
    res.status(200).send(result);
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    if(!id) {
        return res.status(400).send("Id es mandatorio");
    }

    const result = await user.updateUserById(id, req.body);
    res.status(200).send(result);
}

export {
    getAllUsers,
    getUserById,
    insertUser,
    updateUser
}