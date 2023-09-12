const mongoose = require('mongoose');

const orderCollection = 'Orders';

const orderSchema = new mongoose.Schema({
    number: { type: Number},
    businessId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    products: {type: Array},
    totalPrice: { type: Number},
    status: {type: String}
});

const order = new mongoose.model(orderCollection, orderSchema);

module.exports = order;