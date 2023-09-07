const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {type : String},
    age : {type : Number},
    city : {type : String},
    deleted : {type : Boolean , default : false}
})

const UserModel = mongoose.model('user' , userSchema)

module.exports = {
    UserModel
}