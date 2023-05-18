const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const authentication = require("../Model/Schema");


const signUp = async(req,res)=>{
    
    const {name,email,password}=req.body
    
    const salt = bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password,parseInt(salt))


    userSignup = await authentication.findOne({name,email,password})

    if(userSignup){
        res.json("Data already exist")
    }else{
     const  reciveData = await authentication.create({
            name,
            email,
            password:hashedpassword
        })

        const token = (id)=>{
           return jwt.sign({id},`${process.env.JWT_SECRET}`,{
            expiresIn:"1d",
           })
        }

        res.json({
            name:reciveData.name,
            email:reciveData.email,
            password:reciveData.password,
            Token:token(reciveData._id)
            
        })
    }
}

module.exports = signUp