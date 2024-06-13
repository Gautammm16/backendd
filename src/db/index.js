import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB =async () =>{
    try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(`\n connection established and hosted on ${connectionInstance.connection.host}`);
    }catch(e){
        console.log("error",e);
        process.exit(1);
    }
}

export default connectDB;




/*
try{
mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
console.log("connection  established")
}catch(e){
    console.log("Error:",e);
    process.exit(1);
}

*/