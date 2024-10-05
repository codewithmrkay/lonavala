import React from 'react'

function PlacesToVisit({trip}) {
  return (
    <div>
      <div className="w-full py-8">
        <h1 className="text-3xl font-bold mb-6">Places To Visit</h1>
        <div className="space-y-8">
          {trip?.tripData?.itinerary.map((day,index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 px-6 py-4">
                <h2 className="text-2xl font-semibold">{day.day}</h2>
              </div>
              <div className="p-6">
                {day.plan.map((p, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <h3 className="text-xl font-semibold mb-2">{p.placeName}</h3>
                    <p className="text-gray-600 mb-4">{p.placeDetails}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center">
                        <span><strong>Best Time:</strong> {p.bestTimeToVisit}</span>
                      </div>
                      <div className="flex items-center">
                        <span><strong>Travel Time:</strong> {p.timeTravel}</span>
                      </div>
                      <div className="flex items-center">
                        <span><strong>Ticket:</strong> {p.ticketPricing}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlacesToVisit