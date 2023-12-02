
const express=require("express")
const router=express.Router();
const authController=require("../controller/authController")
const validator=require('express-joi-validation').createValidator({})
const Joi=require('joi')

const loginSchema=Joi.object({
    email:Joi.string().email().required( ),
    password:Joi.string().min(6).max(20).required()
})

router.post('/userLogin',validator.body( loginSchema),authController.userLogin);
router.post('/userRegister',authController.userRegister)

module.exports=router;