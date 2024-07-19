const HotelService=require('../service/service')
class HotelController{
      scrapHotels= async function(res,req){
        try{
            let url=process.env.urlTunisieBooking
           let hotelsList=HotelService.scrapHotels(url)
            res.status(201).json(hotelsList)

        }catch(err){
           console.log("🚀 ~ HotelController ~ err:", err)
           
        }
        

    }
}
module.exports = new HotelController(); 