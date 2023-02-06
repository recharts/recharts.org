import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Storybook.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const modules = ['installation', 'getting-started', 'customize'];

@connect((state, ownProps) => {
  const pathname = ownProps.location.pathname || '';
  const paths = pathname.split('/');

  return {
    page: paths && paths.length === 4 ? paths[3] : modules[0],
  };
})
class Storybook extends PureComponent {
  render() {
    return <iframe className='storybook' src="https://master--63da8268a0da9970db6992aa.chromatic.com/" />;
  }
}

export default Storybook;
