import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import rootReducer from './reducers';

export default function configureStore(history) {
  const reduxRouterMiddleware = routerMiddleware(history);

  const finalCreateStore = applyMiddleware(reduxRouterMiddleware)(createStore);

  const reducer = combineReducers(Object.assign({}, rootReducer, {
    routing: routerReducer,
  }));

  const store = finalCreateStore(reducer);

  return store;
}
