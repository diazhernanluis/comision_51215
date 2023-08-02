import mongoose from "mongoose";

const usuariosCollection = 'Users';

const usersSchema = new mongoose.Schema({
    nombre: {type: String},
    apellido: {type: String},
    email: {type:String},
    password: {type: String},
});


const users = new mongoose.model(usuariosCollection, usersSchema);

export default users