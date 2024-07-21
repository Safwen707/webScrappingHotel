const axios = require ("axios")
const cheerio= require("cheerio")
const puppeteer=require('puppeteer')
const Hotel = require('../models/Hotel')
const urlH="https://tn.tunisiebooking.com/detail_hotel_36/"
async function getPrice(url){
    // const {data}= await axios.get(url);
    // const $ =cheerio.load (data);
    // const  prix_actuelle=$ (".prix_tot")
    // const prix_ancien=$("#prixtotal1_781").text().trim()
    
        
            
    //         console.log("🚀 ~ proposition.each ~ prix_actuelle:", prix_actuelle)
          
    //         console.log("🚀 ~ proposition.each ~ prix_ancien:", prix_ancien)
        
    
    const browser=await puppeteer.launch()
    console.log('Browser launched.');
    const page=await browser.newPage()
    console.log('New page created.');
    await page.goto(url)
    console.log('Navigated to target URL.');
    
    const prices1= await page.evaluate(()=>{
        //  Array.from(document.querySelectorAll(".prix_tot")).map(x=>{return x.textContent.trim()})
         return Array.from(document.querySelectorAll(".prix_tot")).map(x=>{return{ actual_prix:x.textContent.trim()}})
    })
    let prices=[]
    for(p of prices1){
        if(p.actual_prix!=="TND"){
            prices.push(p)

        }
    }

    console.log("🚀 ~ prices ~ prices:", prices)

    const old_prices1= await page.evaluate(()=>{
        //  Array.from(document.querySelectorAll(".prix_tot")).map(x=>{return x.textContent.trim()})
         return Array.from(document.querySelectorAll(".prix_barre")).map(x=>{return{ old_prix:x.textContent.trim()}})
    })
    let old_prices=[]
    for(p of old_prices1){
        if(p.old_prix!=="TND"){
            old_prices.push(p)

        }
    }

    console.log("🚀 ~ prices ~ prices:", old_prices)

   
    const names= await page.evaluate(()=>{
        //  Array.from(document.querySelectorAll(".prix_tot")).map(x=>{return x.textContent.trim()})
         return Array.from(document.querySelectorAll(".span_lib_hot")).map(x=>{return{ name:x.textContent.trim()}})
    })
    console.log("🚀 ~ names ~ names:", names)
    // old_prices
    // prices
    // names
    let HotelsPromo=[]
    
    for(let i=0;i<prices.length;i++){
         HotelsPromo.push({name:names[i].name,olde_price:old_prices[i].old_prix,actual_price:prices[i].actual_prix})

    }
    console.log("🚀 ~ getPrice ~ HotelsPromo:", HotelsPromo)

    browser.close()
    

}
module.exports = {getPrice};
