// Here we gonna write the connection wala thing with our express server
const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://127.0.0.1:27017/fristApp')

module.exports = {
    connection
}