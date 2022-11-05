

 const mongoose=require("mongoose")
 const express=require("express")
 const {connection}=require('./confige/db')
 const {UserModel}=require("./models/user.model")
require("dotenv").config()
 const PORT=process.env.PORT||8500
 const app=express()

 app.use(express.json())



 app.get("/",(req,res)=>{
   res.send("wellcome")
 })
 app.post("/adddata",async(req,res)=>{
    const data=req.body
    
    const new_data=new UserModel({
       data
    })
    
    await new_data.save()
    res.send(data)

 })
 app.get("/data",async(req,res)=>{
  const result=await UserModel.find()
  res.send(result)
})
 app.listen(PORT,async(req,res)=>{
  try{
    await connection
   console.log(`running on ${PORT}`)
  }catch(e){
  
   console.log(e)
  }
 })