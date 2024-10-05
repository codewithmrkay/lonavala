import React, { useEffect, useState } from 'react';
import GoogleAutoComplete from '../custom/GoogleAutoComplete';
import { Button } from '../../../ui/button'
import { Input } from '../../../ui/input'
import { AI_PROMT, budgetList, travelList } from '../constants/options';
import { toast } from "sonner"
import { chatSession } from '../sevice/Aimodal';
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../../ui/dialog';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../sevice/fireBaseConfig';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
function CreateTrip() {
  const [FormData, setFormData] = useState([]);
  const [openDailog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleInputChange = (naam, value) => {
    setFormData({
      ...FormData,
      [naam]: value
    })
  }
  useEffect(() => {
    console.log(FormData)
  }, [FormData])
  const logIn = useGoogleLogin({
    onSuccess: (codeResp) => {
      // console.log(codeResp);
      GetUserProfile(codeResp);
    },
    onError: (error) => console.log(error)
  });
  const onGenerateTrip = async () => {
    const user = localStorage.getItem('user');
    if (!user) {
      setOpenDialog(true)
      return;
    }
    if (FormData?.noOfDays > 5 && !FormData?.Budget || !FormData?.travel || !FormData?.place || !FormData?.noOfDays) {
      toast('Please Give All Valid Data', {
        unstyled: false,
        classNames: {
          toast: 'bg-red-500 text-gray-900',
        },
      });
      return;
    }
    setLoading(true)
    const Final_Promt = AI_PROMT
      .replace('{location}', FormData?.place)
      .replace('{totalDays}', FormData?.noOfDays)
      .replace('{traveler}', FormData?.travel)
      .replace('{budget}', FormData?.Budget)
      .replace('{totaldays}', FormData?.noOfDays)
    // console.log(Final_Promt); 
    const result = await chatSession.sendMessage(Final_Promt)
    // console.log(result?.response?.text())
    saveAiTripData(result?.response?.text())
    setLoading(false)

  }
  const saveAiTripData = async (TripData) => {
    setLoading(true)
    // import { doc, setDoc } from "firebase/firestore"; 
    const user = JSON.parse(localStorage.getItem('user'))
    const docId = Date.now().toString()
    await setDoc(doc(db, "AiTrips", docId), {
      userSelection: FormData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId
    });
    navigate('/view-trip/'+docId)
    setLoading(false)
  }
  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: `application/json`
      }
    }).then((resp) => {
      console.log(resp.data);
      localStorage.setItem('user', JSON.stringify(resp.data))
      setOpenDialog(false)
      onGenerateTrip()
      // This will log the user profile information
    }).catch((error) => {
      console.log(error);
    });
  };
  return (
    <>
      <div className='sm:px-10 md:px-32 lg:px-56 xl:px10 px-5 py-5 mt-10'>
        <h2 className='font-bold text-3xl'>Tell us Your Travel preferences</h2>
        <p className='mt-3 to-gray-500 text-xl'>Just provide some basic information , and our trip planner will generate a customized Ltineraries Based on Your Preference</p>
        <div className='mt-20 flex flex-col gap-10'>
          <div>
            <h2 className='text-xl my-3 font-bold'>What is Destination of Your Choice?</h2>
            {/* <GoogleAutoComplete 
            onChange={(e)=>handleInputChange('noOfDays',e.target.value)} /> */}
            <GoogleAutoComplete onPlaceSelect={handleInputChange} />
          </div>
          <div>
            <h2 className='text-xl my-3 font-bold'>How Many Days are You Planning Your Trip</h2>
            <Input
              placeholder={"Ex.3"} type='number'
              onChange={(e) => handleInputChange('noOfDays', e.target.value)} />
          </div>
        </div>
        <div className='mt-10'>
          <h2 className='text-xl my-3 font-bold'>What is Your Budget?</h2>
        </div>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {budgetList.map(item => (
            <div
              onClick={() => handleInputChange('Budget', item.title)}
              key={item.id}
              className={`p-4 border-gray-200 border-2 rounded-lg hover:shadow-xl  cursor-pointer hover:border-gray-400 ${FormData?.Budget == item.title && 'border-gray-900 shadow-xl'}`}>
              <h2 className='text-xl'>{item.icon}</h2>
              <h2 className='text-lg font-bold'>{item.title}</h2>
              <h2 className='text-sm text-gray-700'>{item.desc}</h2>
            </div>
          ))}
        </div>
        <div className='mt-10'>
          <h2 className='text-xl my-3 font-bold'>Who do you plan on traveling with on your next adventure?</h2>
        </div>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {travelList.map(item => (
            <div
              onClick={() => handleInputChange('travel', item.title)}
              key={item.id}
              className={`p-4 border-gray-200 border-2 rounded-lg hover:shadow-xl  cursor-pointer hover:border-gray-400 ${FormData?.travel == item.title && 'border-gray-900 shadow-xl'}`}
            >
              <h2 className='text-xl'>{item.icon}</h2>
              <h2 className='text-lg font-bold'>{item.title}</h2>
              <h2 className='text-sm text-gray-700'>{item.desc}</h2>
            </div>
          ))}
        </div>
        <div className='my-10 mb-10 flex justify-end'>
          <Button
            disabled={loading}
            onClick={onGenerateTrip}>
            {loading ?
              <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin' /> : "Generate Trip"
              }
          </Button>
        </div>
        <Dialog open={openDailog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <DialogDescription className='flex flex-col justify-center items-center'>
                <img src="/logo.svg" alt="" />
                <span className='font-bold text-2xl text-gray-900'>Sign In With Google Baccha!</span>
                <span className='font-semibold text-lg text-gray-400'>Please Sign in with google to more security Purpose</span>
                <Button onClick={logIn} className=' flex gap-3 w-full mt-5'>
                  <FcGoogle className='text-2xl' />
                  Sign In With Google</Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

      </div>

    </>
  )
}

export default CreateTrip