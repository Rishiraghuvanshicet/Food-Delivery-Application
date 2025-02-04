const express=require('express');
const router =express.Router();
const {userRegister , userLogin }=require('../controller/userController')

//user login Route
router.post("/userLogin",userLogin)
router.post("/userRegister",userRegister);

module.exports= router