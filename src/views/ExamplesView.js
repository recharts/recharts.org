import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import Examples from 'docs/examples';

@connect(state => {
  return {
    page: state.routing.location.pathname.split('/').filter(item => !!item)[1] || 'area',
  };
}, { push: routeActions.push })
class ExamplesView extends Component {
  handleNavRoute(route, e) {
    e.preventDefault();

    const { push } = this.props;

    push(route);
  }

  render() {
    const { page } = this.props;
    const examples = Examples[page];

    return (
      <div className="page page-examples">
        <div className="sidebar">
          <h2>Examples</h2>
          <ul className="menu">
            <li>
              <a href="#" className={page === 'area' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/examples/area')}>Bar</a>
            </li>
            <li>
              <a href="#" className={page === 'line' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/examples/line')}>Line</a>
            </li>
            <li>
              <a href="#" className={page === 'bar' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/examples/bar')}>Bar</a>
            </li>
          </ul>
        </div>
        <div className="content">
          <h3>{page}</h3>
          <iframe src={examples} allow-modals allow-forms allow-popups allow-scripts allow-same-origin>
          </iframe>
        </div>
      </div>
    );
  }
}

export default ExamplesView;
