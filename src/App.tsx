import React from 'react';
import PastTripList from './routes/PastTrips';
import { Switch, Route, Redirect } from 'react-router-dom';
import TripPage from './routes/Trips/';
import AddTrip from './routes/AddTrip/';
import NavBar from './components/NavBar';
import UserForm from './routes/UserForm';
import { connect } from 'react-redux';
import { userStatus as status } from './reducers/userReducer';
import PrivateRoute from './components/PrivateRoute';

interface ComponentStateProps {
  user: any;
}

type AppState = ComponentStateProps;

function App({ user }: AppState) {
  React.useEffect(()=>{
    const { email, userId } = user;

    if (email) {
      const userJson = JSON.stringify({ email, userId });
      window.localStorage.setItem("user", userJson);
    }
  }, [user])

  return (
    <div>
      <Switch>

        <Redirect exact from="/" to="/user" />
        {user.status === status.loggedIn && (<Redirect exact from="/user" to="past" />)}
        
        <PrivateRoute isLoggedIn component={PastTripList} path="/past" />
        <PrivateRoute component={TripPage} path="/trip/:id" />
        <PrivateRoute component={AddTrip} path="/add" />
        <Route exact path="/user" component={UserForm} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state:any) => ({
  user: state.user,
});


export default connect<AppState, any, any>(mapStateToProps, null)(App);
