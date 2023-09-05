import * as businessServices from '../services/business.services.js';
import log from '../config/logger.js';

const getAllBusiness = async (req, res) => {
    let result;
    try {
        result = await businessServices.getAll();
    } catch (e) {
        log.error("Error: ", e);
        return res.status(500).send("Error interno");
    }

    res.status(200).send(result);
};

const getBusinessById = async (req, res) => {
    const { id } = req.params;
    if(!id) {
        return res.status(400).send("Id es mandatorio!");
    }

    try {        
        const result = await businessServices.getBusinessById(id);
        res.status(200).send(result);
    } catch (e) {
        log.error("Error: ", e.message);
        res.status(500).send("Error interno!");
    }
}

const insertBusiness = async (req, res) => {
    try {
        const result = await businessServices.create(req.body);
        res.status(200).send(result);    
    } catch (e) {
        log.error(e);
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
        log.error(e);
        res.status(500).send("Failed to update");
    }
}

export {
    getAllBusiness,
    getBusinessById,
    insertBusiness,
    addBusinessProduct
}