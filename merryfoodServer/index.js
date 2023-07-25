//step1
//import express
const express=require('express')

//step2
//server creation
const merryfoodsserver=express()

//step10
//import logic
const logic=require('./service/logic')


//step11
//incoming json type data convert to js
merryfoodsserver.use(express.json())

//step13
//import cors
const cors=require('cors')

//step14
merryfoodsserver.use(cors({origin:'http://localhost:4200'}))

//step3
// set port 
 merryfoodsserver.listen(3002,()=>{
    console.log("------server started at port 3002------");
 })
//run server npx nodemon index.js in cmd

//step4
//server api resolve
merryfoodsserver.post('/getexc',(req,res)=>{
    res.send("------post request--------")
})
//check in thunder client 

//step 12
//register-post
merryfoodsserver.post('/register',(req,res)=>{
    logic.register(req.body.mno,req.body.uname,req.body.address,req.body.email,req.body.psw).then(result=>{
        //convert js to json and send as response
        res.status(result.statuscode).json(result)
    })
})

//step15
//login - post
merryfoodsserver.post('/login',(req,res)=>{
    logic.login(req.body.mno,req.body.psw).then(result=>{
        res.status(result.statuscode). json(result)
    })
})

//get product view-get
merryfoodsserver.get('/productView',(req,res)=>{
    logic.productView(req.body.id,req.body.productName,req.body.categoryId,req.body.description,req.body.price,req.body.is_avaible,req.body.productImg,req.body.review).then(result=>{
        res.status(result.statuscode).json(result)
    })
})
