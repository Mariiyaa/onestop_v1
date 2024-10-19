
const express = require('express');
const router = express.Router();
const { postOrderDetails , fetchOrderDetails ,AgentfetchOrderDetails,UpdateServiceStatus} = require('../controllers/OrderController.js');

router.post('/OrderDetails',postOrderDetails);
router.get('/fetchOrderDetails/:email',fetchOrderDetails)
router.get('/AgentfetchOrderDetails/:email',AgentfetchOrderDetails)
router.post('/updateServiceStatus',UpdateServiceStatus)


module.exports = router;
