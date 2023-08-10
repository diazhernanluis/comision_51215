import business from '../models/schemas/business.schema.js';

const getAll = async () => await business.find();

const getBusinessById = async (id) => await business.findOne({_id: id});

const create = async (info) => await business.create(info);

const updateBusinessProduct = async (id, product) => business.updateOne({_id: id}, {$push: {products: product}});

export {
    getAll,
    getBusinessById,
    create,
    updateBusinessProduct
};