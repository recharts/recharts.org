import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import 'styles/app.scss';

@connect(state => { return {} }, { pushPath })
class Frame extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  handleNavRoute(route, e) {
    e.preventDefault();

    const { pushPath } = this.props;

    pushPath(route);
  }

  render() {
    const { children } = this.props;

    return (
      <div className="container">
        <header>
          <div className="header-wrapper">
            <h1 className="logo">&lt;Recharts /&gt;</h1>
            <nav>
              <ul className="nav" id="nav">
                <li>
                  <a href="/"
                    onClick={this.handleNavRoute.bind(this, '/')}
                    className="nav-link">Index</a>
                </li>
                <li>
                  <a href="/guide"
                    onClick={this.handleNavRoute.bind(this, '/area')}
                    className="nav-link">Guide</a>
                </li>
                <li>
                  <a href="/api"
                    onClick={this.handleNavRoute.bind(this, '/api')}
                    className="nav-link">API</a>
                </li>
                <li>
                  <a href="/examples"
                    onClick={this.handleNavRoute.bind(this, '/examples')}
                    className="nav-link">Examples</a>
                </li>
                <li>
                  <a href="/blog"
                    onClick={this.handleNavRoute.bind(this, '/blog')}
                    className="nav-link">Blog</a>
                </li>
                <li>
                  <a href="https://github.com/recharts/recharts"
                    className="nav-github">Github</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        { children }
        <footer>
          <p>Released under the <a href="http://opensource.org/licenses/MIT" target="_blank">MIT License</a></p>
          <p>Copyright (c) 2016 Recharts Group</p>
        </footer>
      </div>
    );
  }
}

export default Frame;
