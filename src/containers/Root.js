import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

class Root extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    render: PropTypes.func.isRequired,
  };

  shouldComponentUpdate () {
    return false;
  }

  render() {
    const { store, history, routes, render } = this.props;

    return (
      <Provider store={store}>
        <Router history={history} render={render}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

export default Root;
