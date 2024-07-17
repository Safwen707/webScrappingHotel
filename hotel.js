const axios = require ("axios")
const cheerio= require("cheerio")
const mystery="https://tn.tunisiebooking.com/?utm_source=google&utm_medium=cpc&utm_campaign=Marque%20Tunisiebooking%20TN%20ROAS%201%20429,00%20%&utm_content=tunisie%20booking%20Exact%20Match&utm_ad=599766929944&utm_term=tunisie%20booking&matchtype=e&device=c&GeoLoc=9073724&placement=&network=g&campaign_id=10000247516&adset_id=143814854584&ad_id=599766929944&gad_source=1&gclid=CjwKCAjw1920BhA3EiwAJT3lSa746lbMzZACwriCMQ9opPvsg2PBPB6NkXgxi9EHGI-AR0Wr1j0SABoCNfYQAvD_BwE";
const hotel_data = []
async function getHotels (url) {
try{
    const response= await axios.get(url);
    const loadData =cheerio.load (response.data);
    const hotels = loadData(".entete_produit");
    
    const localisation =loadData (".adresse_hotel ").text().trim();
   
    
    lieu=""
    hotels.each(function()
    {
        nom =loadData(this).find (".bloc_titre").text().trim();
        prix =loadData(this).find (".prix_produit").text().trim()
        date_prix=loadData(this).find (".date_prix").text().trim()
        hotel_data.push({nom,prix,lieu, date_prix})
       
        
    });
   
    const localisations=localisation.split(" ")
    console.log("🚀 ~ getHotels ~  localisations:",  localisations)
    i=0
    hotel_data.map(hotel => {
        hotel.lieu = localisations[i]
        i+=1;
    }
         
    )
    // console.log("🚀 ~ getHotels ~ Hotels:", hotel_data)
    
    
    
    




}catch (error) {
    console.error(error);
}
    
}
getHotels (mystery);