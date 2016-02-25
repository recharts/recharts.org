import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { useRouterHistory } from 'react-router';
import useScroll from 'scroll-behavior/lib/useStandardScroll';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/configureStore';
import Root from './containers/Root';
import routes from './routes';

const createScrollHistory = useScroll(createBrowserHistory);
const appHistory = useRouterHistory(createScrollHistory)();

const store = configureStore(appHistory);
const history = syncHistoryWithStore(appHistory, store);

render(
  <Root store={store} history={history} routes={routes} />,
  document.getElementById('app'));
