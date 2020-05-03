import React from 'react';
import PastTripList from './routes/PastTrips/PastTripsList';
import { Switch, Route, Redirect } from 'react-router-dom';
import TripPage from './routes/Trips/TripPage';
import AddTrip from './routes/CreateTrip/AddTrip';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="past" />
        <Route
          path="/past"
          render={() => {
            return (
              <div>
                <PastTripList />
                <NavBar />
              </div>
            );
          }}
        />
        <Route
          path="/trip/:id"
          render={() => {
            return (
              <div>
                <TripPage />
                <NavBar />
              </div>
            );
          }}
        />
        <Route exact path="/add" component={AddTrip} />
      </Switch>
    </div>
  );
}

export default App;
