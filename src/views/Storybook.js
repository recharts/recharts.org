import React, { PureComponent } from 'react';
import './Storybook.scss';

class Storybook extends PureComponent {
  render() {
    return (
      <iframe
        title="Recharts storybook"
        className="storybook"
        src="https://main--63da8268a0da9970db6992aa.chromatic.com/"
      />
    );
  }
}

export default Storybook;
