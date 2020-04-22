import React from 'react';


const bg = {
  backgroundImage: 'url("https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")',
};

const PastTripsCard = ({ trips }) => {
  return (
    <div className="px-6 my-2 ">
      <div className="flex flex-col  rounded p-1 shadow-lg" >
        <p className="text-black font-semibold font-sans tracking-wide">{trips.destination}</p>
        <p className="text-gray-700 italic text-xs">{trips.name}</p>
        <p className="text-gray-600 italic text-xs self-end">{trips.created_at}</p>
      </div>
    </div>
  );
};

export default PastTripsCard;
