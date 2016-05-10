import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import DevTools from './DevTools';

function Root({ store, history, routes, render }) {
  return (
    <Provider store={store}>
      {
        __DEV__ ?
        (<div>
          <Router history={history} render={render}>
            {routes}
          </Router>
          <DevTools />
        </div>) :
        <Router history={history} render={render}>
          {routes}
        </Router>
      }
    </Provider>
  );
}

export default Root;
