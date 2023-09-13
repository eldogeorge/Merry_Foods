//step 5 intall npm i mongoose
//import mongoose
const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/merryFoods")

//step6
//mode for collection
const User=mongoose.model('User',{
    mno:String,
    uname:String,
    address:String,
    email:String,
    psw:String,
    order:[]
})



//product db
mongoose.connect("mongodb://127.0.0.1:27017/merryFoods")

const Product=mongoose.model('Product',{
    id:Number,
    productName:String,
    categoryId:Number,
    description:String,
    price:String,
    is_avaible:Boolean,
    productImg:String,
    review:String,

})



//step7
//export model
module.exports={
    User,Product
}