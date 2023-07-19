import * as businessServices from '../services/business.services.js';

const getAllBusiness = async (req, res) => {
    const result = await businessServices.getAll();
    res.status(200).send(result);
};

const getBusinessById = async (req, res) => {
    const { id } = req.params;
    if(!id) {
        return res.status(400).send("Id es mandatorio!");
    }

    const result = await businessServices.getBusinessById(id);
    res.status(200).send(result);
}

const insertBusiness = async (req, res) => {
    try {
        const result = await businessServices.create(req.body);
        res.status(200).send(result);    
    } catch (e) {
        console.error(e);
        res.status(500).send(result);
    }
}

const addBusinessProduct = async (req, res) => {
    const {id} = req.params;
    if(!id) {
        return res.status(400).send("Id es mandatorio");
    }

    try {
        const product = req.body;
        const result = await businessServices.updateBusinessProduct(id, product);
        res.status(200).send(result);
    } catch (error) {
        console.error(e);
        res.status(500).send("Failed to update");
    }
}

export {
    getAllBusiness,
    getBusinessById,
    insertBusiness,
    addBusinessProduct
}