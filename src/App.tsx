import React from 'react';
import PastTripList from './routes/PastTrips';
import { Switch, Route, Redirect } from 'react-router-dom';
import TripPage from './routes/Trips/';
import AddTrip from './routes/AddTrip/';
import NavBar from './components/NavBar';
import UserForm from './routes/UserForm';

function App() {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/user" />
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
        <Route exact path="/user" component={UserForm} />
      </Switch>
    </div>
  );
}

export default App;
