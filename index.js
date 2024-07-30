const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
repository1=require('./repository/hotels')
repository2=require('./repository/getPrice')
const linkDatabase = require('./config/db')

app.use(express.json());


const port=process.env.PORT ||3000
app.listen(port,()=>{
    console.log(`running on port ${port}`)
});

linkDatabase();

// repository1.getHotels(process.env.urlTunisieBooking)

// repository1.getHotels(process.env.urlTunisieBooking)


