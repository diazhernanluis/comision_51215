import mongoose from 'mongoose';
import config from './config.js';


const conection = async () => {
    try {
        const conn = await mongoose.connect(config.db.cs);
        console.log("Coneccion establecida correctamente: ");
    } catch (e) {
        console.log("Error: ", e);
    }
}

export {
    conection
}