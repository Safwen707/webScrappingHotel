const axios = require ("axios")
const cheerio= require("cheerio")
const Hotel = require('../models/Hotel')
const hotel_data = []
async function getHotels (url) {
try{
    const {data}= await axios.get(url);
    const $ =cheerio.load (data);
    const box_produit = $("div.box_produit");
   
    box_produit.each(function()
    {   
        const entet_produit =$(this).find("div.entete_produit");
        entet_produit.each(function(){
        nom =$(this).find (".bloc_titre").text().trim();
        prix =$(this).find (".prix_produit").text().trim()
        date_prix=$(this).find (".date_prix").text().trim()
        imgEtoileSrc = $(this).find('img').attr('src');
        lieu = $(this).find('span.adresse_hotel').text().trim()||""
        
        })
        img_hotel_in = $(this).find("div.img_hotel_in");
        img_hotel_in.each(function(i,elem){
            imgHoteleSrc=$(elem).find('img.image_hotel').attr('src')||" ";

        })
        let hotel=new Hotel({nom,prix, date_prix,lieu,imgEtoileSrc,imgHoteleSrc})
        hotel.save()
        hotel_data.push({nom,prix, date_prix,lieu,imgEtoileSrc,imgHoteleSrc})
        // console.log("🚀 ~ getHotels ~ hotel_data:", hotel_data)

        // imgHotelSrc = $(this).find('img.image_hotel').attr('src');
         
        
    });
   
}catch (error) {
    console.error(error);
}
    
}
module.exports = {getHotels};
// getHotels (mystery);