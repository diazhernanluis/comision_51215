const mongoose = require('mongoose');

const usersCollection = 'Users';

const usersSchema = new mongoose.Schema({
    nombre: { type: String},
    correo: { type: String},
    rol: { type: String},
    password: {type: String},
    orders:  [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orders'
    }]
});

const users = new mongoose.model(usersCollection, usersSchema);

module.exports = users;