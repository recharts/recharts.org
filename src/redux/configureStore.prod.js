import { createStore, combineReducers, applyMiddleware } from 'redux';
import { syncHistory, routeReducer } from 'react-router-redux';
import rootReducer from './reducers';

export default function configureStore(history) {
  const reduxRouterMiddleware = syncHistory(history);

  const finalCreateStore = applyMiddleware(reduxRouterMiddleware)(createStore);

  const reducer = combineReducers(Object.assign({}, rootReducer, {
    routing: routeReducer,
  }));

  const store = finalCreateStore(reducer);
  reduxRouterMiddleware.listenForReplays(store);

  return store;
}
