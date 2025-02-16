
import mongoose, { Schema,model } from "mongoose"
 
const Moviesschema= new Schema(
    {
        name:{type:String, maxLength:120, required:true},
        Producer:{type:String, maxLength:120, required:true},

}) 

