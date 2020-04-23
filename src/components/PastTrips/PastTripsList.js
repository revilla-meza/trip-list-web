import React, { useState } from 'react';
import trips from './trips.json';
import PastTripsCard from './PastTripsCard';
import addTrip from './addTrip.svg';
import { Link } from "react-router-dom";

const PastTripsList = () => {
  const [tripList] = useState(trips);

  return (
    <div>
      <h1 className='mt-8 mb-16 ml-8 font-sans text-lg font-bold '>Past Trips</h1>
        {tripList.map((trip) => (
        <Link to={`/trip/${trip.id}`} key={trip.id}><PastTripsCard key={trip.id} trips={trip} /></Link> 
      ))}
        <div className="flex  items-center flex-col mb-32">
        <Link to='/add'>
        <img className="w-16 h-auto mt-32 " src={addTrip} alt="add trip button" />
        <h2 className="text-md font-bold">add trip</h2>
        </Link>
      </div>
    </div>
  );
};

export default PastTripsList;
