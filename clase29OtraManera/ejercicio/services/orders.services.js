import order from '../models/schemas/order.schema.js';

const getAll = async () => await order.find();

const getorderById = async () => await order.findOne({_id: id});

const getOrderBySku = async () => await order.findOne({sku: sku});

const create = async (info) => await order.create(info);

const updateOrderById = async (id, newStatus) => order.updateOne({_id: id}, {$set: {status: newStatus}});

export {
    getAll,
    getorderById,
    create,
    updateOrderById,
    getOrderBySku
};