import mongoose from "mongoose";

const usersCollection = 'Users';

const usersSchema = new mongoose.Schema({
    nombre: { type: String},
    correo: { type: String},
    rol: { type: String},
    orders:  [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orders'
    }]
});

const users = new mongoose.model(usersCollection, usersSchema);

export default users;