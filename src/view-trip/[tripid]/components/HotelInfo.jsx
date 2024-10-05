import React from 'react'
import PlaceHolderImg from '../../../assets/placeholder.jpg'
const openMap = (location) => {
    const url = `https://www.google.com/maps?q=${encodeURIComponent(location)}`;
    window.open(url, '_blank');
  };
function HotelInfo({ trip }) {
    return (
        <>
            <div>
                <h2 className='font-bold text-2xl'>Hotel Recomendation</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {trip?.tripData?.hotels.map((hotel,index) => (
                        <div onClick={() => openMap(hotel?.hotelName+""+hotel?.hotelAddress)}
                        key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:cursor-pointer">
                            <img src={PlaceHolderImg} alt={hotel.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{hotel?.hotelName}</h2>
                                <p className="text-gray-600 text-sm mb-2">{hotel?.hotelAddress}</p>
                                <p className="text-lg font-bold text-green-600">${hotel?.price} / night</p>
                                <h2 className="text-xl font-semibold mb-2">{hotel?.rating} Rating</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HotelInfo