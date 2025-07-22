import mongoose from "mongoose";

export const databaseConnection = async () => {
    try{
        await mongoose.connect(process.env.DB_CONNECT)
        console.log("Connected to MongoDB")
    }
    catch(err){
        console.log(err);

    }

}