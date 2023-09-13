import mongoose from "mongoose";

const businessCollection = 'Business';

const businessSchema = new mongoose.Schema({
    name: { type: String},
    products: {type: Array}
});

const business = new mongoose.model(businessCollection, businessSchema);

export default business;