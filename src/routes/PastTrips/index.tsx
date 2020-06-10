import React, { useEffect } from 'react';
import PastTripsCard from './PastTripsCard';
import NavBar from '../../components/NavBar';
import { connect } from 'react-redux';
import fetchTrips from '../../actions/fetchTrips';

import { Link } from 'react-router-dom';

interface ComponentStateProps {
  tripIds: any;
  fetchTrips: any;
  tripsById: any;
  status: any;
}
type AppState = ComponentStateProps;

const PastTripsList = ({ tripIds, tripsById, fetchTrips, status }: AppState) => {
  useEffect(() => {
    const doInBackground = tripIds.length > 0;
    fetchTrips(doInBackground);
  }, [fetchTrips]);

  if (status === 'loading') {
    return <p className="mt-32  font-sans text-lg font-bold text-center  ">loading...</p>;
  }
  return (
    <div>
      <div>
        <h1 className="mt-8 mb-16 ml-8 font-sans text-lg font-bold ">Past Trips</h1>

        {tripIds.length === 0 && (
          <h1 className="mt-32  font-sans text-lg font-bold text-center  ">
            Welcome to Trip List
            <br />
            Please add a new Trip
          </h1>
        )}
        {tripIds.map((id: any) => (
          <Link to={`/trip/${id}`} key={id}>
            <PastTripsCard key={id} trips={tripsById[id]} />
          </Link>
        ))}
      </div>
      <NavBar />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  tripIds: state.trips.ids,
  tripsById: state.trips.byId,
  status: state.trips.getTripsStatus,
});

export default connect(mapStateToProps, { fetchTrips })(PastTripsList);
