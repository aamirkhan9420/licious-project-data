const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
     type:Object
})
const UserModel=mongoose.model("licious",userschema)
module.exports={UserModel}