import React, { useEffect, useState } from 'react'
import { db } from '../../components/ui/sevice/fireBaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { DoorClosed } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import InfoSection from './components/infoSection'
import HotelInfo from './components/HotelInfo'
import PlacesToVisit from './components/PlacesToVisit'
import Footer from './components/Footer'
function Viewtrip() {
    const { tripid } = useParams()
    const [trip, setTrip] = useState([])
    useEffect(() => {
        tripid && GetTripData();
    }, [tripid])
    const GetTripData = async () => {
        const docRef = doc(db, 'AiTrips', tripid)
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setTrip(docSnap.data())
            console.log(docSnap.data())
        }
        else {
            toast('no found of doc')
        }
    }
    return (
        <>
            <div className='p-5 md:px-20 lg:px-44 xl:px-56'>
                {/* information section */}
                <InfoSection trip={trip} />
                {/* recomended hotels */}
                <HotelInfo trip={trip} />
                {/* daily plan */}
                <PlacesToVisit trip={trip}/>
                {/* footer */}
                <Footer/>
            </div>
        </>
    )
}

export default Viewtrip