const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {type : String},
    age : {type : Number},
    city : {type : String}
})

const UserModel = mongoose.model('user' , userSchema)

module.exports = {
    UserModel
}