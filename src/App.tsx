import React from 'react';
import PastTripList from './components/PastTrips/PastTripsList'
import { Switch,Route, Redirect } from "react-router-dom";
import TripPage from './components/Trips/TripPage';
import AddTrip from './components/AddTrip';

function App() {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="past" />
        <Route exact path='/past' component={PastTripList}/>
        <Route path='/trip/:id'   component={TripPage}/>
        <Route path='/add' component={AddTrip}/>
      </Switch>
    </div>
  );
}

export default App;
