const bcrypt = require("bcrypt")

const authentication = require("../Model/Schema");

const login =async(req,res)=>{

    const{email,password}=req.body
    console.log(email,password);

    const newdata = await authentication.findOne({email})
    if (!newdata) {
      return  res.json("login failed")
    }
    console.log(newdata);

    if(newdata.email == email && (await bcrypt.compare(password,newdata.password)))
    { 
        res.json("Login Successfull")
    }else{
        res.json("Login failed")
    }
    
}

module.exports = login