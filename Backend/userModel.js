import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:[true,"Please enter First Name"]
    },
    lastName : {
        type:String,
        required:[true,"Please enter First Name"]
    },
    country:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required :true,
        unique:true,
        validate:validator.default.isEmail
    },
    role:{
        type:String,
        required :true,
        enum:["Cool Kid","Cooler Kid","Coolest Kid"],
        default:"Cool Kid"
    }
},
{
    timestamps:true
})

export const User = mongoose.model("User", userSchema)