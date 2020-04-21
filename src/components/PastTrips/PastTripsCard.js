import React from 'react';

const PastTripsCard = ({ trips }) => {
  return (
    <div className="p-1">
      <div className="flex items-center justify-between border-black bg-blue-200 rounded p-1 hover:bg-red-100">
        <p className="ml-2 text-gray-700 font-semibold font-sans tracking-wide">{trips.destination}</p>
        <p className="text-gray-600 italic text-xs">{trips.name}</p>
        <div>
          <p className="self-end text-xs ml-16 text-gray-600 font-semibold font-sans tracking-wide">
            {trips.created_at}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PastTripsCard;
