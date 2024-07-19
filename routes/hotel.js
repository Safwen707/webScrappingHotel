const express = require('express');
const router = express.Router();
const HotelController=require('../controller/controller')
//taritement

router.post("/scrapHotels",HotelController.scrapHotels)














module.exports= router;