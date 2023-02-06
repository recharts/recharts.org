import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Storybook.scss';

@connect((state, ownProps) => {
  const pathname = ownProps.location.pathname || '';
  const paths = pathname.split('/');

  return {
    page: paths && paths.length && paths[paths.length - 1],
  };
})
class Storybook extends PureComponent {
  render() {
    return <iframe className="storybook" src="https://master--63da8268a0da9970db6992aa.chromatic.com/" />;
  }
}

export default Storybook;
