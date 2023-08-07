import mongoose from "mongoose";

const productosCollection = 'Productos';

const productosSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    precio: Number,
    stock: Number,
});


const productos = new mongoose.model(productosCollection, productosSchema);

export default productos