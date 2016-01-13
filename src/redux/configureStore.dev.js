import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';
import { routeReducer } from 'redux-simple-router';

import rootReducer from './reducers';
import DevTools from '../containers/DevTools';

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

const finalCreateStore = compose(
  DevTools.instrument(),
  persistState(getDebugSessionKey())
)(createStore);

const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routeReducer,
}));

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers'))
    );
  }

  return store;
}
