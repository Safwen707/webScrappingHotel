const repository = require('../repository/repository')
const Hotel = require('../models/Hotel')
class HotelService{
     scrapHotels=(url)=>{
        
        
        let hotelsList=[]
        hotelsList=repository.getHotels(url)
        for(let i=0;i< hotelsList.length;i++){
            let hotel=new Hotel(hotelsList[i])
            console.log("🚀 ~ HotelService ~ hotel:", hotel)
            hotel.save()
        }
        return hotelsList

    }
}
module.exports = new HotelService();