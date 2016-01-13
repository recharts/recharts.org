import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/lib/createBrowserHistory';
import useScroll from 'scroll-behavior/lib/useScrollToTop';
import { syncReduxAndRouter } from 'redux-simple-router';
import configureStore from './redux/configureStore';
import Root from './containers/Root';
import routes from './routes';

const history = useScroll(createHistory)();
const store = configureStore();

syncReduxAndRouter(history, store);

render(
  <Root store={store} history={history} routes={routes} />,
  document.getElementById('app'));
