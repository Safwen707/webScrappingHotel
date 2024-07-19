const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
repository1=require('./repository/hotels')
repository2=require('./repository/hotelProps')
const linkDatabase = require('./config/db')

app.use(express.json());


const port=process.env.PORT ||3000
app.listen(port,()=>{
    console.log(`running on port ${port}`)
});

linkDatabase();
repository1.getHotels(process.env.urlTunisieBooking)
repository2.getPropreties("https://tn.tunisiebooking.com/theme/rsltv2_new_v2.php?item=dep=25%2F07%2F2024&dfin=26%2F07%2F2024&retourh=&chambress=1&source_comm=web+desktop&id_xml_hotel=36&ville=Hammamet&dep=25%2F07%2F2024&depart=25%2F07%2F2024&dfin=26%2F07%2F2024&arrivee=26%2F07%2F2024&nbr_nuit=1&retourh=&chambres=1&lastch=1&active=1&adultes1=2&enfants1=1&age1_1=2&age1_2=&age1_3=&adultes2=2&enfants2=0&age2_1=&age2_2=&age2_3=&adultes3=2&enfants3=0&age3_1=&age3_2=&age3_3=&adultes4=2&enfants4=0&age4_1=&age4_2=&age4_3=&adultes5=2&enfants5=0&age5_1=&age5_2=&age5_3=")