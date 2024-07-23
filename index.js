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
<<<<<<< HEAD
repository1.getHotels(process.env.urlTunisieBooking)
repository2.getPrice("https://tn.tunisiebooking.com/theme/rsltv2_new_v2.php?item=dep=25%2F07%2F2024&dfin=26%2F07%2F2024&retourh=&chambress=1&source_comm=web+desktop&id_xml_hotel=36&ville=Hammamet&dep=25%2F07%2F2024&depart=25%2F07%2F2024&dfin=26%2F07%2F2024&arrivee=26%2F07%2F2024&nbr_nuit=1&retourh=&chambres=1&lastch=1&active=1&adultes1=2&enfants1=1&age1_1=2&age1_2=&age1_3=&adultes2=2&enfants2=0&age2_1=&age2_2=&age2_3=&adultes3=2&enfants3=0&age3_1=&age3_2=&age3_3=&adultes4=2&enfants4=0&age4_1=&age4_2=&age4_3=&adultes5=2&enfants5=0&age5_1=&age5_2=&age5_3=")
=======
// repository1.getHotels(process.env.urlTunisieBooking)
repository2.getPrice("https://tn.tunisiebooking.com/theme/rsltv2_new_v2.php?item=ZGVwPTIxJTJGMDclMkYyMDI0JmRmaW49MjMlMkYwNyUyRjIwMjQmcmV0b3VyaD0mY2hhbWJyZXNzPTEmc291cmNlX2NvbW09d2ViZGVza3RvcCZpZF94bWxfaG90ZWw9MzYmdmlsbGU9SGFtbWFtZXQmZGVwPTIxJTJGMDclMkYyMDI0JmRlcGFydD0yMSUyRjA3JTJGMjAyNCZkZmluPTI3JTJGMDclMkYyMDI0JmFycml2ZWU9MjclMkYwNyUyRjIwMjQmbmJyX251aXQ9NiZyZXRvdXJoPSZjaGFtYnJlcz0xJmxhc3RjaD0xJmFjdGl2ZT0wJmFkdWx0ZXMxPTImZW5mYW50czE9MCZhZ2UxXzE9JmFnZTFfMj0mYWdlMV8zPSZhZHVsdGVzMj0yJmVuZmFudHMyPTAmYWdlMl8xPSZhZ2UyXzI9JmFnZTJfMz0mYWR1bHRlczM9MiZlbmZhbnRzMz0wJmFnZTNfMT0mYWdlM18yPSZhZ2UzXzM9JmFkdWx0ZXM0PTImZW5mYW50czQ9MCZhZ2U0XzE9JmFnZTRfMj0mYWdlNF8zPSZhZHVsdGVzNT0yJmVuZmFudHM1PTAmYWdlNV8xPSZhZ2U1XzI9JmFnZTVfMz0%3D")
>>>>>>> c92087ace6901667b1f3c95d280e46ef0d63b891
