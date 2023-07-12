import mongoose from "mongoose";

const usersCollection = 'usuarios';

const usersSchema = new mongoose.Schema({
    nombre: {type: String},
    apellido: {type: String},
    numero: {type: Number}
});

const users = new mongoose.model(usersCollection, usersSchema);

export default users;