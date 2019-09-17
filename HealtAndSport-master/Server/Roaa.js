
var express = require("express");;
var router= express.Router()

const Roaa = require("../database/Roaa");

router.get("/id",(req,res)=>{

    res.json("This is Roaa server")
   
})

router.post('/Sign/:email/:password/:name',(req,res)=>{
   let  name =req.params.name
   let  email =req.params.email
   let  password=req.params.password
    Roaa.signup(email,password,name,(result)=>{
  res.json(result)
    } )
   
})

router.post('/login',(req,res)=>{
    let  input = req.body
    console.log("ServerLogin",input)
  
    Roaa.login(input,(result)=>{
        res.json(result)
    })
})



module.exports=router;