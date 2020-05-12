import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userStatus } from '../reducers/userReducer';

function PrivateRoute({ component: Component, userStatus: status, ...rest }: any) {
  return <Route {...rest} render={() => (status === userStatus.loggedIn ? <Component /> : <Redirect to="/login" />)} />;
}

const mapStateToProps = (state: any) => ({ userStatus: state.user.status });

export default connect(mapStateToProps)(PrivateRoute);
