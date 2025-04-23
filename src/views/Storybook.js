import React, { PureComponent } from 'react';
import './Storybook.scss';

class Storybook extends PureComponent {
  render() {
    return <iframe className="storybook" src="https://master--63da8268a0da9970db6992aa.chromatic.com/" />;
  }
}

export default Storybook;
