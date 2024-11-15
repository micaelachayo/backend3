import mongoose from 'mongoose';


export const petsModel=mongoose.model("Pets", new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    specie:{
        type:String,
        required:true
    },
    birthDate:Date,
    adopted:{
        type:Boolean,
        default:false
    },
    owner:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Users'
    }
 },{timestamps:true, strict:false}))

