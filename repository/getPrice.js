const axios = require ("axios")
const cheerio= require("cheerio")
const Hotel = require('../models/Hotel')
const urlH="https://tn.tunisiebooking.com/detail_hotel_36/"
const puppeteer=require('puppeteer')

async function getPrice(url){
    
   

    const browser=await puppeteer.launch({
        headless:false
        
    })
    console.log('Browser launched.');
    const page=await browser.newPage()
    console.log('New page created.');
    await page.goto(url)
    console.log('Navigated to target URL.');
    




// await page.type("#depart","22/08/2024") //(deux params le champs ou vous veuillez ecrire et le éeme param et la valeur a ecrir)
// 
console.log("arrivee")
    
await page.click("#arrivee.v37_73")
await page.$eval('input#checkin',(e) => e.removeAttribute("readonly"));  
 

await page.$eval('input#checkout.checkout',(e) => e.removeAttribute("readonly"));  
await page.$eval('input#checkout.checkout',(e) => e.value="28/07/2024");  

 

 await page.click(".v162_15") 
 await Promise.all([await page.$eval('input#checkin',(e) => {e.value="26/07/2024" }),page.click(".v194_22"),page.waitForNavigation({waitUntil:'networkidle2'})])

 




const  HotelsPromo= await page.evaluate(()=>{
    let prices=[]
    let prices1= Array.from(document.querySelectorAll(".prix_tot")).map(x=>{return{ actual_prix:x.textContent.trim()}})
    for(p of prices1){
        
        if(p.actual_prix!=="TND"){
            prices.push(p)
    
        }
    }
    
    
    let old_prices=[]
    let old_prices1=Array.from(document.querySelectorAll(".prix_barre")).map(x=>{return{ old_prix:x.textContent.trim()}})
    for(p of old_prices1){
        if(p.old_prix!=="TND"){
            old_prices.push(p)
        }
    }
    
    let names =Array.from(document.querySelectorAll(".span_lib_hot")).map(x=>{return{ name:x.textContent.trim()}})
    let HotelsPromo=[]
    for(let i=0;i<prices.length;i++){
        HotelsPromo.push({name:names[i].name,olde_price:old_prices[i].old_prix,actual_price:prices[i].actual_prix})
    }
    return HotelsPromo
    
})


console.log("🚀 ~ getPrice ~ HotelsPromo:", HotelsPromo)

// browser.close() 
   
    
}
 
module.exports = {getPrice};