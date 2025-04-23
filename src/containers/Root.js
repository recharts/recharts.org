import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';

class Root extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default Root;
