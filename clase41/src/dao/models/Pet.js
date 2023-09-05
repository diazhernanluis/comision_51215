import mongoose from 'mongoose';

const collection = 'Pets';

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    specie:{
        type:String,
        required:true
    },
    birthDate:String,
    adopted:{
        type:Boolean,
        default:false
    },
    owner:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Users'
    },
    image:String,
    enable: {
        type:Boolean,
        default: true
    }
})

const petModel = mongoose.model(collection,schema);

export default petModel;