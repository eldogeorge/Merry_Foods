
//step8

const db = require("./db")
const productdb = require("./productdb")
// const jwt=require("jsonwebtoken")//tstep1

//register logic

register=(mno,uname,address,email,psw)=>{
    return db.User.findOne({mno}).then(user => {
        if (user) {
            return {
                message: "User Already Present",
                status: false,
                statuscode: 402,//client error

            }
        }
        else {
            newuser = new db.User({
                mno: mno,
                uname: uname,
                address:address,
                email:email,
                psw: psw,
                order:[]
            })
            newuser.save()//to reflect the changes done by server in database(to save)
            return {
                message: "Register Successfully",
                status: true,
                statuscode: 202//success(to store)
            }
        }
    })
}


//step16
//login logic
login=(mno,psw)=>{
    return db.User.findOne({mno,psw}).then(user=>{//key value are same (acno:ano)
        if(user){
            //token generation
            // const token=jwt.sign({mno},"BankKey")//object,string//tstep2
            return{
                message:"Login Success",
                status: true,
                statuscode:202,//success(to store)  
                currentUser:user.uname,//to display in localStorage
                currentAcno:mno,//to display in localStorage
                // token//to display token in localStorage(token:token if diff name)
            }
        }
        else{
            return{
                message:"Incurrent account number or password",
                status: false,
                statuscode:402//client error
            }
        }
    })

}

productView=(id,productName,categoryId,description,price,is_avaible,productImg,review)=>{
    return productdb.Product.find({id,productName,categoryId,description,price,is_avaible,productImg,review}).then(product=>{//retrun item 3.1
        if(product){
            return{
                message:product.productView,
                status:true,
                statuscode:202
            }
        }
        else{
            return{
                message:"User not Exit",
                status: false,
                statuscode:402//client error
            }
        }
    })
}
//step9
module.exports={
    register,login,productView
}
