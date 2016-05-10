import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { applyRouterMiddleware, browserHistory } from 'react-router';
import useScroll from 'react-router-scroll';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/configureStore';
import Root from './containers/Root';
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} routes={routes} render={applyRouterMiddleware(useScroll)} />,
  document.getElementById('app'));
