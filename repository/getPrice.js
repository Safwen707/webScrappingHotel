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
    slowMo: 50
        
})
const {data}= await axios.get(url);
const $ =cheerio.load (data);   
console.log('Browser launched.'); 
const page=await browser.newPage()
console.log('New page created.');
await page.goto(url)
console.log('Navigated to target URL.');
    


    
await page.click("#arrivee.v37_73")
console.log("arrivee")
var table = await page.evaluate(()=>{
    return( document.getElementsByTagName('tbody'));

})
console.log("🚀  table:",  table)
Object.keys(table).forEach(function(key, index) {
    table[key] =table[key].tr;
    
  });
  console.log("🚀 ~ Object.keys ~  table:",  table)
// for (var i = 0, row; row = table.rows[i]; i++) {
//    //iterate through rows
//    //rows would be accessed using the "row" variable assigned in the for loop
//    for (var j = 0, col; col = row.cells[j]; j++) {
//      //iterate through columns
//      //columns would be accessed using the "col" variable assigned in the for loop
//    }  
// }








// await page.waitForSelector('body > div.daterangepicker.ltr.auto-apply.single.opensleft.show-calendar > div.drp-calendar.left.single > div.calendar-table > table > tbody', { visible: true });
await delay(1000)
const datePicker =await page.$$eval("body > div:nth-child(10) > div.drp-calendar.left.single > div.calendar-table > table > tbody",el => el.textContent)

console.log("🚀 ~ datePicker ~ datePicker:", datePicker) 

await page.click('body > div.daterangepicker.ltr.auto-apply.single.opensleft.show-calendar > div.drp-calendar.left.single > div.calendar-table > table > tbody ')
console.log('clicked') 
await delay(10000)



// await page.$eval('input#checkin',(e) => e.removeAttribute("readonly")); 
// await page.$eval('input#checkin',(e) => {e.value="25/07/2024" });  
// await page.click(".col_dep")
// await page.$eval('input#checkout.checkout',(e) => e.removeAttribute("readonly"));  
// await page.$eval('input#checkout.checkout',(e) => e.value="31/07/2024");  
 



await Promise.all([page.click(".v194_22")])  
  







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
await delay(5000)
browser.close() 
   
     
} 
 
 
getPrice("https://tn.tunisiebooking.com/theme/rsltv2_new_v2.php?item=c291cmNlX2NvbW09d2ViK2Rlc2t0b3AmdmlsbGVfdHh0PUhhbW1hbWV0JmlkX3htbF9ob3RlbD0mdmlsbGU9SGFtbWFtZXQmZGVwPTI4JTJGMDclMkYyMDI0JmRlcGFydD0yOCUyRjA3JTJGMjAyNCZkZmluPTMxJTJGMDclMkYyMDI0JmFycml2ZWU9MzElMkYwNyUyRjIwMjQmbmJyX251aXQ9MyZyZXRvdXJoPTI0JTJGMDclMkYyMDI0JmNoYW1icmVzPTEmbGFzdGNoPTEmYWN0aXZlPTEmYWR1bHRlczE9MiZlbmZhbnRzMT0xJmFnZTFfMT0yJmFnZTFfMj0mYWdlMV8zPSZhZHVsdGVzMj0wJmVuZmFudHMyPTAmYWdlMl8xPSZhZ2UyXzI9JmFnZTJfMz0mYWR1bHRlczM9MCZlbmZhbnRzMz0wJmFnZTNfMT0mYWdlM18yPSZhZ2UzXzM9JmFkdWx0ZXM0PTAmZW5mYW50czQ9MCZhZ2U0XzE9JmFnZTRfMj0mYWdlNF8zPSZhZHVsdGVzNT0wJmVuZmFudHM1PTAmYWdlNV8xPSZhZ2U1XzI9JmFnZTVfMz0%3D")