// We gonna make our own express server and connect mongoose with it
const express = require('express')

const {connection} = require('./db')
const {UserModel} = require('./User.model')

const app = express()

app.use(express.json())

app.get('/', (req,res) => {
    res.send("Basic end point")
})

// Reading Users
app.get('/users' , async (req,res) => {
    const dataDB = await UserModel.find(req.query)
    res.send({dataDB})
    // res.send("We'll send users here from the database")
})

// Creating users
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

// Updating users
app.put('/users/:userID' , async (req,res) => {
    const {userID} = req.params
    const payload = req.body

    const user = await UserModel.findByIdAndUpdate({_id : userID} , payload)

    res.send({user})
})

// Deleting operation
app.delete('/users/:userID' , async (req,res) => {
    const {userID} = req.params

    const user = await UserModel.findByIdAndDelete({_id : userID})
    res.send({user})
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