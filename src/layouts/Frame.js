import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import 'styles/app.scss';

@connect((state, ownProps) => {
  return {
    page: ownProps.location.pathname.split('/').filter(item => !!item)[0] || 'index',
  };
})
class Frame extends Component {
  static propTypes = {
    page: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    const { page, children } = this.props;

    return (
      <div className="container">
        <Helmet titleTemplate={'%s | Recharts'} />
        <header>
          <div className="header-wrapper">
            <h1 className="logo">
              <Link
                className="nav-logo"
                to="/">&lt;Recharts /&gt;</Link>
            </h1>
            <nav>
              <ul className="nav" id="nav">
                <li>
                  <Link activeClassName="active" className="nav-link" to="/guide">Guide</Link>
                </li>
                <li>
                  <Link activeClassName="active" className="nav-api" to="/api">API</Link>
                </li>
                <li>
                  <Link activeClassName="active" className="nav-examples" to="/examples">Examples</Link>
                </li>
                <li>
                  <Link activeClassName="active" className="nav-link" to="/blog">Blog</Link>
                </li>
                <li>
                  <a href="https://github.com/recharts/recharts"
                    target="_blank"
                    className="nav-github">Github</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        { children }
        <footer>
          <p>Contact us by <a href="https://demo.rocket.chat/channel/recharts" target="_blank">Rocket.Chat</a></p>
          <p>Released under the <a href="http://opensource.org/licenses/MIT" target="_blank">MIT License</a></p>
          <p>Copyright (c) 2016 Recharts Group</p>
        </footer>
      </div>
    );
  }
}

export default Frame;
