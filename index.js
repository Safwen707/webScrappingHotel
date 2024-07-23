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

repository1.getHotels(process.env.urlTunisieBooking)

// repository1.getHotels(process.env.urlTunisieBooking)
repository2.getPrice("https://tn.tunisiebooking.com/theme/rsltv2_new_v2.php?item=ZGVwPTIxJTJGMDclMkYyMDI0JmRmaW49MjMlMkYwNyUyRjIwMjQmcmV0b3VyaD0mY2hhbWJyZXNzPTEmc291cmNlX2NvbW09d2ViZGVza3RvcCZpZF94bWxfaG90ZWw9MzYmdmlsbGU9SGFtbWFtZXQmZGVwPTIxJTJGMDclMkYyMDI0JmRlcGFydD0yMSUyRjA3JTJGMjAyNCZkZmluPTI3JTJGMDclMkYyMDI0JmFycml2ZWU9MjclMkYwNyUyRjIwMjQmbmJyX251aXQ9NiZyZXRvdXJoPSZjaGFtYnJlcz0xJmxhc3RjaD0xJmFjdGl2ZT0wJmFkdWx0ZXMxPTImZW5mYW50czE9MCZhZ2UxXzE9JmFnZTFfMj0mYWdlMV8zPSZhZHVsdGVzMj0yJmVuZmFudHMyPTAmYWdlMl8xPSZhZ2UyXzI9JmFnZTJfMz0mYWR1bHRlczM9MiZlbmZhbnRzMz0wJmFnZTNfMT0mYWdlM18yPSZhZ2UzXzM9JmFkdWx0ZXM0PTImZW5mYW50czQ9MCZhZ2U0XzE9JmFnZTRfMj0mYWdlNF8zPSZhZHVsdGVzNT0yJmVuZmFudHM1PTAmYWdlNV8xPSZhZ2U1XzI9JmFnZTVfMz0%3D")

