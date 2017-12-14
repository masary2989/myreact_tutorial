// import redux instrument
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import AppReducer from './reducers';

// make store
const middleware = [thunkMiddleware];


function createFinalStore() {
  const bindMiddleStore = createStore(AppReducer, applyMiddleware(...middleware));
  return bindMiddleStore;
}



export default createFinalStore();
