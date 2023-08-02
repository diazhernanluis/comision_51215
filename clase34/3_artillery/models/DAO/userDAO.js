import users from '../schemas/userSchema.js';
import MongoSingleton from '../dbConnect.js';

class userDao {
    constructor() {
        const db = MongoSingleton.getInstance();
    }

    getall = async () => await users.find();

    getUserByEmail = async (email) => await users.findOne({email: email});

    create = async (info) => await users.create(info);

    updateUserByid = async (id, info) => await users.updateOne({_id: id}, { $set: info});

    updateOrderByUserId = async (id, orderId) => users.updateOne({_id: id}, { $push: {orders: orderId}})
}

export default userDao