import React from 'react';
import PastTripList from './routes/PastTrips';
import { Switch, Route, Redirect } from 'react-router-dom';
import TripPage from './routes/Trips/';
import AddTrip from './routes/AddTrip/';
import SignupForm from './routes/SignupForm';
import LoginForm from './routes/LoginForm';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';

interface ComponentStateProps {
  user: any;
}

type AppState = ComponentStateProps;

function App({ user }: AppState) {
  React.useEffect(() => {
    const { email, userId } = user;

    if (email) {
      const userJson = JSON.stringify({ email, userId });
      window.localStorage.setItem('user', userJson);
    }
  }, [user]);

  return (
    <div className="pb-32">
      <Switch>
        <Redirect exact from="/" to="/signup" />
        <PrivateRoute component={PastTripList} path="/past" />
        <PrivateRoute component={TripPage} path="/trip/:id" />
        <PrivateRoute component={AddTrip} path="/add" />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect<AppState, any, any>(mapStateToProps, null)(App);
