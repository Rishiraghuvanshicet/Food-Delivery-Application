const express=require('express');
const { foodSave, getFood } = require('../controller/foodController');
const router =express.Router();


//user login Route
router.post("/saveProduct",foodSave)
router.get("/saveProduct",getFood);


module.exports= router