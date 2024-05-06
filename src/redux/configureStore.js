import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './rootReducer';

export default function configureStore(initialState = {}, history) {
  const middleware = [thunk, routerMiddleware(history)];

  const enhancers = [];
  // eslint-disable-next-line no-undef
  if (import.meta.env.DEV) {
    const { devToolsExtension } = window;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), ...enhancers));

  return store;
}
