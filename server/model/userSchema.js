import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
    },
    userName: String,
    password: String    
})
export default mongoose.model("user",userSchema)