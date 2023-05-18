const mongoose = require("mongoose")

const authenticationSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
})

const authentication = mongoose.model("Authentication",authenticationSchema)

module.exports = authentication