const axios = require ("axios")
const cheerio= require("cheerio")
const Hotel = require('../models/Hotel')
const urlH="https://tn.tunisiebooking.com/detail_hotel_36/"
async function getPropreties(url){
    const {data}= await axios.get(url);
    const $ =cheerio.load (data);
    const  prix_actuelle=$ (".prix_tot")
    const prix_ancien=$("#prixtotal1_781").text().trim()
    
        
            
            console.log("🚀 ~ proposition.each ~ prix_actuelle:", prix_actuelle)
          
            console.log("🚀 ~ proposition.each ~ prix_ancien:", prix_ancien)
        
    
    
    
    

}
module.exports = {getPropreties};