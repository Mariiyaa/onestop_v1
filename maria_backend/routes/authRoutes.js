const express =require('express');
const router = express.Router();
const cors=require('cors');
const { test,registerUser,loginUser,Dashboard,DeleteUser,updateUserProfile,registerAgent,LoginAgent } = require('../controllers/authControllers')
const {chatbot} = require("../controllers/chatbot")
//middleware
router.use (
    cors(
        {
           credentials:true ,
           origin : ['http://localhost:3000', 'http://localhost:5000']
        }
    )
)

router.post('/SignupAgent',registerAgent)
router.post('/LoginAgent',LoginAgent)
router.post('/Signup',registerUser)
router.post('/',loginUser)
router.get('/:email',Dashboard)
router.post('/chat',chatbot)
router.put('/profile/:email', updateUserProfile);
router.delete('/delete/:email',DeleteUser)
console.log("post is working !!!!!")
module.exports = router