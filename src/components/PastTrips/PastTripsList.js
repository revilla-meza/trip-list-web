import React, { useState } from 'react';
import trips from './trips.json';
import PastTripsCard from './PastTripsCard';
import addTrip from './addTrip.svg';

const PastTripsList = () => {
  const [tripList] = useState(trips);

  return (
    <div>
      <h1 className='mt-8 mb-16 ml-8 font-sans text-lg font-bold '>Past Trips</h1>
      {/* This linked to create trip from  */}
    
      {/* This linked to create trip from   */}

      {/* This Linked to trip page */}
      {tripList.map((trip) => (
        <PastTripsCard key={trip.id} trips={trip} />
      ))}
        <div className="flex  items-center flex-col mb-32">
        <img className="w-16 h-auto mt-32 " src={addTrip} alt="add trip button" />
        <h2 className="text-md font-bold">add trip</h2>
      </div>
    </div>
  );
};

export default PastTripsList;
