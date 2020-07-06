import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SVGIcon from '../../components/SVGIcon';

const PastTripsCard = ({ trips, deleteTrip }: any) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const toDelete = (): any => {
    setIsDeleted(!isDeleted);
  };

  return (
    <div>
      {!isDeleted ? (
        <div className="px-6 my-2 ">
          <div className="flex flex-col bg-indigo-200 rounded p-1 shadow-lg">
            <Link className="flex flex-col" to={`/trip/${trips.id}`}>
              {' '}
              <p className="text-black font-semibold font-sans tracking-wide">{trips.destination}</p>
              <p className="text-gray-700 italic text-xs">{trips.title}</p>
              <p className="text-gray-600 italic text-xs self-end">{trips.travel_method}</p>
            </Link>
            <div className="self-end w-3" onClick={(): any => toDelete()}>
              <SVGIcon icon="deleteIcon" />
            </div>
          </div>
        </div>
      ) : (
        <div className="px-6 my-2">
          <div className="flex flex-col bg-indigo-100 rounded p-1 shadow-lg">
            <p className="text-black font-semibold font-sans tracking-wide">Delete?</p>
            <button className="bg-green-500 w-8 mb-2 rounded" onClick={(): any => deleteTrip(trips.id)}>
              Yes
            </button>
            <button className="bg-red-500 w-8 rounded " onClick={(): any => toDelete()}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PastTripsCard;
