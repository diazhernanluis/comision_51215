import users from '../schemas.js';
import MongooseSingleton from '../dbConnect.js';

class usersDaoMongo {
    constructor() {
        const db = MongooseSingleton.getInstance();
    }

    getAll = async () => await users.find();

    insert = async (info) => {
        return await users.insertMany(info);
    };

    updateById = async(id, info) => {
        return await users.updateOne({_id: id}, {set: info});
    };

    deleteById = async (id) => {
        return await users.deleteOne({_id: id});
    }
}

export default usersDaoMongo