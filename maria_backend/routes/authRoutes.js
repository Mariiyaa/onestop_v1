const express =require('express');
const router = express.Router();
const cors=require('cors');
const { test,registerUser,loginUser } = require('../controllers/authControllers')
const {chatbot} = require("../controllers/chatbot")
//middleware
router.use (
    cors(
        {
           credentials:true ,
           origin : "http://localhost:3000"
        }
    )
)


router.post('/Signup',registerUser)
router.post('/',loginUser)
router.post('/chat',chatbot)
console.log("post is working !!!!!")
module.exports = router