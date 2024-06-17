import {asyncHandler} from "../utils/asyncHandler.js";
import { Apierror } from "../utils/ApiError.js";
import { User } from './../models/user.model.js';
const registerUser = asyncHandler(async(req,res)=>{
    //  res.status(200).json({
    //     message:"ok",
    // })

    
    //get user details from frontend
    const {fullname,email,username,password }  = req.body;
    console.log("fullname :",fullname,"email :",email,"username :",username,"password :",password);


    //validation 
    // if(fullname==="",email==="",username==="",password===""){
    //     throw new ApiError(400),"field required",
    // }

    if(
        [fullname,email,username,password].some((field)=>
            field?.trim() === "")
    )
    {
        throw new Apierror(400,"all fields are required");
    }

    const existedUser = User.findOne({
        $or:[{email},{username}]
    })
    if(existedUser){
        throw new Apierror(409,"User with same username and email exists")
    }

    
    
})



export {registerUser}