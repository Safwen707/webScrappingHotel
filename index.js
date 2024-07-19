const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
 const hotelRoute =require('./routes/hotel')//importation de route

const linkDatabase = require('./config/db')

app.use(express.json());

// const bodyParser = require('body-parser');//pour reacte
// const cors = require('cors');//pour reacte
// app.use(cors());//pour reacte
// app.use(bodyParser.json());//pour reacte

app.use('/hotel',hotelRoute); //utilisation de route
 const port=process.env.PORT ||3000
app.listen(port,()=>{
    console.log(`running on port ${port}`)
});

linkDatabase();