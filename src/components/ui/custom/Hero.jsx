import { Link } from 'react-router-dom'
import { Button } from '../../../ui/button'
import React from 'react'

function Hero() {
    return (
        <>
            <div className='flex flex-col items-center mx-50 gap-9'>
            <h1
                className='font-extrabold text-[50px] text-center mt-12'
            ><span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span><br /> Personalized Ltineraries at Your Fingertips
            </h1>
            <p className='text-xl text-center to-gray-500'>Your Personal trip Planner and travel curator , creating custom itineraries tailored to your iterests and budged</p>
            <Link to={"/create-trip"}>
            <Button>Get Started It's Free</Button>
            </Link>
            </div>
        </>
    )
}

export default Hero