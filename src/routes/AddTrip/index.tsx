import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import SVGIcon from '../../components/SVGIcon';
import { connect } from 'react-redux';
import createTrip from '../../actions/createTrip';

interface ComponentStateProps {
  createTrip: any;
  status: any;
}

type AppState = ComponentStateProps;

const AddTrip = ({ createTrip, status }: AppState) => {
  const [newTrip, setNewTrip] = useState({ destination: '', title: '', travel_method: '' });

  const onChangeHandler = (e: any) => {
    setNewTrip({ ...newTrip, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    createTrip(newTrip);
    e.target.reset();
  };

  if (status === 'success') {
    return <Redirect to="/past" />;
  }
  return (
    <div>
      <Link to="/past" className="">
        <SVGIcon icon="ArrowBack" />
      </Link>
      <h1 className="mt-4 mb-16 ml-8 font-sans text-lg font-bold ">Create your Trip</h1>
      <form onSubmit={onSubmitHandler} className="px-6 my-2 ">
        <label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mb-4 text-center"
            type="text"
            placeholder="where are you going?"
            name="destination"
            onChange={onChangeHandler}
          />
        </label>

        <label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mb-4 text-center"
            type="text"
            placeholder="name your trip"
            onChange={onChangeHandler}
            name="title"
          />
        </label>

        <div className="inline-block relative w-full">
          <select
            className="block appearance-none w-full text-center pr-16 bg-gray-200 text-gray-700 border hover:border-gray-500 px-4 py-3  rounded  leading-tight focus:outline-none focus:shadow-outline"
            onChange={onChangeHandler}
            name="travel_method"
          >
            <option>Select your travel method</option>
            <option>airplane</option>
            <option>car</option>
            <option>train</option>
            <option>other</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

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

const mapStateToProps = (state: any) => ({
  status: state.createTrip.getCreateTripStatus,
});

export default connect(mapStateToProps, { createTrip })(AddTrip);
