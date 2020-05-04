import React, { useState } from 'react';
import trips from './trips.json';
import PastTripsCard from './PastTripsCard';
import NavBar from '../../components/NavBar';

import { Link } from 'react-router-dom';

const PastTripsList = () => {
  const [tripList] = useState(trips);

  return (
    <div>
      <h1 className="mt-8 mb-16 ml-8 font-sans text-lg font-bold ">Past Trips</h1>
      {tripList.map((trip) => (
        <Link to={`/trip/${trip.id}`} key={trip.id}>
          <PastTripsCard key={trip.id} trips={trip} />
        </Link>
      ))}
      <NavBar />
    </div>
  );
};

export default PastTripsList;
