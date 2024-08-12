const express = require('express');
const dotenv = require('dotenv').config()
const cors =require('cors')
const mongoose = require ('mongoose')


const app=express();

// DB connection 
mongoose.connect(process.env.MONGO_URI)
.then (() => console.log("DB connected"))
.catch((err) => console.log("DB not connected",err))

//middleware


try {
app.use(express.json())
app.use('/',require('./routes/authRoutes'))
console.log("connected sucessfully")
}
catch (e) {
    console.log (e)
}
const port=8000;
app.listen(port, () => console.log(`server is running on ${port}`));