const users = require('../models/schemas/user.schema.js');

const getAll = async () => await users.find();

const getUserByID = async(id) => await users.findOne({_id: id});

const getUserByEmail = async(email) => await users.findOne({correo: email});

const create = async (info) => await users.create(info);

const updateUserById = async (id, info) => await users.updateOne({_id: id}, {$set: info});

const updatePasswordByEmail = async (email, hashedPassword) => await users.updateOne({correo: email}, {$set: {password: hashedPassword}});

const updateOrderByUserId = async (id, orderId) => await users.updateOne({_id: id}, {$push: {orders: orderId}});

module.exports = {
    getAll,
    getUserByID,
    getUserByEmail,
    create,
    updateUserById,
    updatePasswordByEmail,
    updateOrderByUserId
}