import users from '../models/schemas/user.schema.js';

const getAll = async () => await users.find();

const getUserByID = async(id) => await users.findOne({_id: id});

const create = async (info) => await users.create(info);

const updateUserById = async (id, info) => await users.updateOne({_id: id}, {$set: info});

const updateOrderByUserId = async (id, orderId) => await users.updateOne({_id: id}, {$push: {orders: orderId}});

export {
    getAll,
    getUserByID,
    create,
    updateUserById,
    updateOrderByUserId
}