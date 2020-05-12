import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/main.css';
import { BrowserRouter as Router } from 'react-router-dom';
import reducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const anyWindow = window as any;
const composeEnhancers = anyWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
