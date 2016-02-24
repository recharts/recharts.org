import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import rootReducer from './reducers';
import DevTools from '../containers/DevTools';

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

export default function configureStore(history) {
  const reduxRouterMiddleware = routerMiddleware(history);

  const finalCreateStore = compose(
    applyMiddleware(reduxRouterMiddleware),
    DevTools.instrument(),
    persistState(getDebugSessionKey())
  )(createStore);

  const reducer = combineReducers(Object.assign({}, rootReducer, {
    routing: routerReducer,
  }));

  const store = finalCreateStore(reducer);

  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers'))
    );
  }

  return store;
}
