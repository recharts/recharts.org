import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import { Installation, GettingStarted, Customize } from 'components/GuideView';

@connect(state => {
  return {
    page: state.routing.location.pathname.split('/').filter(item => !!item)[1] || 'installation',
  };
}, { push: routeActions.push })
class GuideView extends Component {
  handleNavRoute(route, e) {
    e.preventDefault();

    const { push } = this.props;

    push(route);
  }

  renderGuide() {
    const { page } = this.props;

    if (page === 'installation') {
      return <Installation />;
    } else if (page === 'getting-started') {
      return <GettingStarted />;
    } else if (page === 'customize') {
      return <Customize />;
    }
  }

  render() {
    const { page } = this.props;

    return (
      <div className="page page-guide">
        <div className="sidebar">
          <h2>Guide</h2>
          <ul className="menu">
            <li>
              <a href="#" className={page === 'installation' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/guide/installation')}>Installation</a>
            </li>
            <li>
              <a href="#" className={page === 'getting-started' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/guide/getting-started')}>Getting Started</a>
            </li>
            <li>
              <a href="#" className={page === 'customize' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/guide/customize')}>Customize</a>
            </li>
          </ul>
        </div>
        <div className="content">
          {this.renderGuide()}
        </div>
      </div>
    );
  }
}

export default GuideView;
