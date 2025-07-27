import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    categoryId:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },

    price:{
        type:Number,
        required:true,
    }
})

export default mongoose.model('Product',productSchema);