import order from '../schemas/order.schema.js';
import MongoSingleton from '../../config/dbConnect.js';

class ordersDAO {
    constructor() {
        const db = MongoSingleton.getIstance();
    }

    getAll = async () => await order.find();

    getorderById = async () => await order.findOne({_id: id});

    create = async (info) => await order.create(info);

    updateOrderById = async (id, newStatus) => order.updateOne({_id: id}, {$set: {status: newStatus}});
}

export default ordersDAO;