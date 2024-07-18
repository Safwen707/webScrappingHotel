const axios = require ("axios")
const cheerio= require("cheerio")
const mystery="https://tn.tunisiebooking.com/?utm_source=google&utm_medium=cpc&utm_campaign=Marque%20Tunisiebooking%20TN%20ROAS%201%20429,00%20%&utm_content=tunisie%20booking%20Exact%20Match&utm_ad=599766929944&utm_term=tunisie%20booking&matchtype=e&device=c&GeoLoc=9073724&placement=&network=g&campaign_id=10000247516&adset_id=143814854584&ad_id=599766929944&gad_source=1&gclid=CjwKCAjw1920BhA3EiwAJT3lSa746lbMzZACwriCMQ9opPvsg2PBPB6NkXgxi9EHGI-AR0Wr1j0SABoCNfYQAvD_BwE";
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
            imgHoteleSrc=$(elem).find('img.image_hotel').attr('src');

        })
        hotel_data.push({nom,prix, date_prix,lieu,imgEtoileSrc,imgHoteleSrc})
        console.log("🚀 ~ getHotels ~ hotel_data:", hotel_data)

        // imgHotelSrc = $(this).find('img.image_hotel').attr('src');
        
        
        
       
       
        
    });
    // console.log("🚀 ~ getHotels ~ hotel_data:", hotel_data)
   
    // const localisations=localisation.split(" ")
    
    // i=0
    // hotel_data.map(hotel => {
    //     hotel.lieu = localisations[i]
    //     i+=1;
    // }
         
    // )
    // console.log("🚀 ~ getHotels ~ Hotels:", hotel_data)
    
    
    
    




}catch (error) {
    console.error(error);
}
    
}
getHotels (mystery);