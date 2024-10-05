import React from 'react';
import { FaUser, FaUsers, FaChild, FaHiking,FaDollarSign, FaMoneyBillWave, FaPiggyBank, FaCoins } from 'react-icons/fa';

export const travelList = [
    {
      id: 1,
      title: 'Just Me',
      desc: 'Solo traveler in exploration',
      icon: <FaUser size={30} style={{ color: 'blue' }} />,
      people: '1'
    },
    {
      id: 2,
      title: 'Adventure Duo',
      desc: 'Two friends on an adventure',
      icon: <FaHiking size={30} style={{ color: 'green' }} />,
      people: '2'
    },
    {
      id: 3,
      title: 'Family Fun',
      desc: 'Family vacation time',
      icon: <FaChild size={30} style={{ color: 'orange' }} />,
      people: '4'
    },
    {
      id: 4,
      title: 'Group Getaway',
      desc: 'Group of friends exploring together',
      icon: <FaUsers size={30} style={{ color: 'purple' }} />,
      people: '5+'
    }
  ];
export const budgetList = [
    {
      id: 1,
      title: 'Cheap',
      desc: 'Stay conscious of costs',
      icon: <FaDollarSign size={30} style={{ color: 'green' }} />,
      people: '1'
    },
    {
      id: 2,
      title: 'Moderate',
      desc: 'Balance between cost and comfort',
      icon: <FaMoneyBillWave size={30} style={{ color: 'blue' }} />,
      people: '2-3'
    },
    {
      id: 3,
      title: 'Comfort',
      desc: 'Enjoy a comfortable experience',
      icon: <FaPiggyBank size={30} style={{ color: 'orange' }} />,
      people: '4-5'
    },
    {
      id: 4,
      title: 'Luxury',
      desc: 'Indulge in premium experiences',
      icon: <FaCoins size={30} style={{ color: 'gold' }} />,
      people: '5+'
    }
  ];
export const AI_PROMT = "Generate Travel Plan for Location : {location},for {totalDays} Days for {traveler} with a {budget} budget, give me hotels options list with HotelName, Hotel address, price , hotel img url , geo coordinates, Details , place img url , geo coordinates, ticket pricing, time travel each of the location for {totaldays} days with each day plan with best time to visit in JSON format."  