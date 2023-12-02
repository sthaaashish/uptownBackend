
const express = require('express');
const router = express.Router();
 const checkUser=require("../middleware/authCheck")
const contactController=require("../controller/contactController")



router.post('/sendMessage',checkUser.userCheck,contactController.sendMessages)

module.exports = router;
