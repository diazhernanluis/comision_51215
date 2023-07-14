import business from '../schemas/business.schema.js';
import MongoSingleton from '../../config/dbConnect.js';

class businessDAO {
    constructor() {
        const db = MongoSingleton.getIstance();
    }

    getAll = async () => await business.find();

    getBusinessById = async (id) => await business.findOne({_id: id});

    create = async (info) => await business.create(info);

    updateBusinessProduct = async (id, product) => business.updateOne({_id: id}, {$push: {products: product}});
}

export default businessDAO;