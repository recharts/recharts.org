import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/configureStore';
import Root from './containers/Root';
import routes from './routes';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} routes={routes} />,
  document.getElementById('app'));
