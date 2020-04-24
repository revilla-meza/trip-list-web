import React from 'react';
import arrowBack from './arrow_back.svg';
import { Link } from 'react-router-dom';

const AddTrip = () => {
  // ADD TRIP FORM
  return (
    <div>
      <Link to="/past" className="">
        <img src={arrowBack} />
      </Link>
      <h1 className="mt-4 mb-16 ml-8 font-sans text-lg font-bold ">Create your Trip</h1>
      <form className="px-6 my-2 ">
        <label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mb-4 text-center"
            type="text"
            placeholder="where are you going?"
          />
        </label>

        <label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mb-4 text-center"
            type="text"
            placeholder="name your trip"
          />
        </label>

        <label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mb-4 text-center"
            type="text"
            placeholder="trip date: yyyy-mm-dd"
          />
        </label>

        <label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mb-4 text-center"
            type="text"
            placeholder="travel method"
          />
        </label>

        <button
          className="mx-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-20 mt-64"
          type="submit"
        >
          Go!
        </button>
      </form>
    </div>
  );
};

export default AddTrip;
