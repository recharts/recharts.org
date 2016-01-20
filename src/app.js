import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router'
import configureStore from './redux/configureStore';
import Root from './containers/Root';
import routes from './routes';

const store = configureStore(browserHistory);

render(
  <Root store={store} history={browserHistory} routes={routes} />,
  document.getElementById('app'));
