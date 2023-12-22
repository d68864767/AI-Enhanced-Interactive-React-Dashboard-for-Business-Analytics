// Import necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Import the main App component
import App from './App';

// Import the main reducer
import rootReducer from './reducers';

// Create the Redux store with the main reducer and middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

// Render the main App component and provide the Redux store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
