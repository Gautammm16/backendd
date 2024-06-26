import { DB_NAME } from "./constants.js";
import {app} from "./app.js";
import connectDB from "./db/index.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at ${process.env.PORT}`);
    })
})
.catch((e)=>{
    console.log("MONGODB CONNECTION FAILED :",e);
})