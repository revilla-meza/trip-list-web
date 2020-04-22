import React from 'react';



const PastTripsCard = ({ trips }) => {
  return (
    <div className="px-6 my-2 ">
      <div className="flex flex-col bg-indigo-200 rounded p-1 shadow-lg">
        <p className="text-black font-semibold font-sans tracking-wide">{trips.destination}</p>
        <p className="text-gray-700 italic text-xs">{trips.name}</p>
        <p className="text-gray-600 italic text-xs self-end">{trips.created_at}</p>
      </div>
    </div>
  );
};

export default PastTripsCard;
