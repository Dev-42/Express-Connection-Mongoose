// We gonna make our own express server and connect mongoose with it
const express = require('express')

const {connection} = require('./db')
const {UserModel} = require('./User.model')

const app = express()

app.use(express.json())

app.get('/', (req,res) => {
    res.send("Basic end point")
})
app.get('/users' , async (req,res) => {
    const dataDB = await UserModel.find()
    res.send({dataDB})
    // res.send("We'll send users here from the database")
})
app.post('/users/create' , async (req,res) => {
    const {name,age,city} = req.body

    const user = new UserModel({
        name: name,
        age : age,
        city : city
    })
    await user.save()
    res.send("User was created here successfully")
})

app.listen(8000 , async () => {
    try{
        await connection
        console.log("Connected to DB successfully")
    }catch(e){
        console.log("Error while connected DB")
        console.log(e)
    }
    console.log("Listening on port 8000")
})