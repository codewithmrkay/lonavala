import React, { useEffect } from 'react'
import Placeholder from '../../../assets/placeholder.jpg'
import { Button } from '../../../ui/button'
import { IoSendSharp } from "react-icons/io5";
import { GetPlaceDetails } from '../../../components/ui/sevice/GlobalApi';
function InfoSection({ trip }) {
    // useEffect(()=>{
    //     trip&&GetPlacePhoto();
    // },[trip])
    // const GetPlacePhoto = async()=>{
    //     const data = {
    //         textQuery:trip?.userSelection?.place
    //     }
    //     const result = await GetPlaceDetails().then(resp=>{
    //         console.log(resp.data)
    //     })
    // }
    return (
        <div>
            <img src={Placeholder} alt="" className='h-[300px] w-full object-cover rounded-sm' />
            <div className='flex justify-between items-center'>
                <div className='my-5 flex flex-col gap-3'>
                    <h2 className='font-bold text-2xl'>{trip?.userSelection?.place}</h2>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <h2 className='border-2 border-gray-900 p-1 px-3 bg-gray-300 rounded-full font-semibold'>📅 {trip?.userSelection?.noOfDays} Days</h2>
                        <h2 className='border-2 border-gray-900 p-1 px-3 bg-gray-300 rounded-full font-semibold'>🏝️ {trip?.userSelection?.travel}</h2>
                        <h2 className='border-2 border-gray-900 p-1 px-3 bg-gray-300 rounded-full font-semibold'>💰 {trip?.userSelection?.Budget} Budget</h2>
                    </div>
                </div>
                <Button><IoSendSharp /></Button>
            </div>
        </div>
    )
}

export default InfoSection