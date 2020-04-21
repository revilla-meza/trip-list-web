import React, { useState } from 'react';
import trips from './trips.json';
import PastTripsCard from './PastTripsCard';
import addTrip from './addTrip.svg';

const PastTripsList = () => {
  const [tripList] = useState(trips);

  console.log(tripList);

  return (
    <div>
      {/* This linked to create trip from  */}
      <div className="flex  items-center flex-col mb-32">
        <img className="w-16 h-auto mt-32 " src={addTrip} alt="add trip button" />
        <h2 className="text-md">Add Trip</h2>
      </div>
      {/* This linked to create trip from   */}

      {/* This Linked to trip page */}
      {tripList.map((trip) => (
        <PastTripsCard key={trip.id} trips={trip} />
      ))}
    </div>
  );
};

export default PastTripsList;
