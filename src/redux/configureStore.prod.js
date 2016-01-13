import { createStore, combineReducers, applyMiddleware } from 'redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import { routeReducer } from 'redux-simple-router';

import rootReducer from './reducers';
import Appoint from 'utils/Appoint';

const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routeReducer,
}));

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);

  return store;
}
