import React, { useEffect } from 'react';
import PastTripsCard from './PastTripsCard';
import NavBar from '../../components/NavBar';
import { connect } from 'react-redux';
import fetchTrips from '../../actions/fetchTrips';

import { Link } from 'react-router-dom';

interface ComponentStateProps {
  trips: any;
  fetchTrips: any;
  status: any;
}
type AppState = ComponentStateProps;

const PastTripsList = ({ trips, fetchTrips, status }: AppState) => {
  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);
  if (status === 'loading') {
    return <p className="mt-32  font-sans text-lg font-bold text-center  ">loading...</p>;
  }
  return (
    <div>
      <h1 className="mt-8 mb-16 ml-8 font-sans text-lg font-bold ">Past Trips</h1>

      {trips.length === 0 && (
        <h1 className="mt-32  font-sans text-lg font-bold text-center  ">
          Welcome to Trip List
          <br />
          Please add a new Trip
        </h1>
      )}
      {trips.map((trip: any) => (
        <Link to={`/trip/${trip.id}`} key={trip.id}>
          <PastTripsCard key={trip.id} trips={trip} />
        </Link>
      ))}
      <NavBar />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  trips: state.trips.trips,
  status: state.trips.getTripsStatus,
});

export default connect(mapStateToProps, { fetchTrips })(PastTripsList);
