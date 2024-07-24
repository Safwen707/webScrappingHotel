const axios = require ("axios")
const cheerio= require("cheerio")
const Hotel = require('../models/Hotel')
const urlH="https://tn.tunisiebooking.com/detail_hotel_36/"
const puppeteer=require('puppeteer')
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }
async function getPrice(url){
    
const browser=await puppeteer.launch({
    headless:false,//tet7al fenetre 9odemk     
})  
console.log('Browser launched.');

const page=await browser.newPage()
console.log('New page created.');

 await page.goto(url)
console.log('Navigated to target URL.');
    



//------------------------------city---------------------------------
await page.waitForSelector("#search")     
await page.click("#search")
await page.waitForSelector("#ville_des")     
await page.$eval('#ville_des',(e) => {e.value="Douz" });

//------------------------------arrivé---------------------------------
await page.waitForSelector("#arrivee.v37_73")     
await page.click("#arrivee.v37_73")
await page.waitForSelector("#depart") //ma9loubin fe site
await page.$eval('#depart',(e) => {e.value="25/07/2024" });
await page.click("#arrivee.v37_73")

//------------------------------depart---------------------------------

await page.waitForSelector(".col_dep") 
await page.click(".col_dep")
await page.waitForSelector("input#checkout.checkout") 
await page.$eval('input#checkout.checkout',(e) => e.value="30/07/2024"); 

//------------------------------chambre---------------------------------

await page.waitForSelector("#chdest") 
await page.click("#chdest")
await delay(3000)
await page.waitForSelector("#adultes1") 
await page.$eval('#adultes1',(e) => e.value=1); 
await page.waitForSelector("#enfants1") 
await page.$eval('#enfants1',(e) => e.value=1);


await delay(3000)
await page.waitForSelector("#age11") 
await page.$eval('#age11',(e) => e.value=4); 
await delay(3000)




//------------------------------search---------------------------------
await page.waitForSelector(".v194_22") 
await page.click(".v194_22")
await delay(2000)
// -----------------que les hotels disponible--------
await page.waitForSelector("#btn_filtre_hotel_dispo_bleu") 
await page.click("#btn_filtre_hotel_dispo_bleu")
await delay(2000) 









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
 
 
getPrice("https://tn.tunisiebooking.com/theme/rsltv2_new_v2.php?item=c291cmNlX2NvbW09d2ViK2Rlc2t0b3AmdmlsbGVfdHh0PUhhbW1hbWV0JmlkX3htbF9ob3RlbD0mdmlsbGU9SGFtbWFtZXQmZGVwPTI4JTJGMDclMkYyMDI0JmRlcGFydD0yOCUyRjA3JTJGMjAyNCZkZmluPTMxJTJGMDclMkYyMDI0JmFycml2ZWU9MzElMkYwNyUyRjIwMjQmbmJyX251aXQ9MyZyZXRvdXJoPTI0JTJGMDclMkYyMDI0JmNoYW1icmVzPTEmbGFzdGNoPTEmYWN0aXZlPTEmYWR1bHRlczE9MiZlbmZhbnRzMT0xJmFnZTFfMT0yJmFnZTFfMj0mYWdlMV8zPSZhZHVsdGVzMj0wJmVuZmFudHMyPTAmYWdlMl8xPSZhZ2UyXzI9JmFnZTJfMz0mYWR1bHRlczM9MCZlbmZhbnRzMz0wJmFnZTNfMT0mYWdlM18yPSZhZ2UzXzM9JmFkdWx0ZXM0PTAmZW5mYW50czQ9MCZhZ2U0XzE9JmFnZTRfMj0mYWdlNF8zPSZhZHVsdGVzNT0wJmVuZmFudHM1PTAmYWdlNV8xPSZhZ2U1XzI9JmFnZTVfMz0%3D")
