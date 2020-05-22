import React from 'react';
import NavBar from '../../components/NavBar';
import Items from './Items';

const TripPage = () => {
  return (
    <div>
      {/* HERE WILL RENDER TRIP PAGE BY TRIP ID */}
      Trip Page
      <Items />
      <NavBar />
    </div>
  );
};

export default TripPage;
