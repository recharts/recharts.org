import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Link from 'utils/Link';
import 'styles/app.scss';

@connect((state, ownProps) => {
  return {
    page: ownProps.location.pathname.split('/').filter(item => !!item)[0] || 'index',
  };
}, { push })
class Frame extends Component {
  static propTypes = {
    page: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    const { push, page, children } = this.props;

    return (
      <div className="container">
        <header>
          <div className="header-wrapper">
            <h1 className="logo">
              <Link
                className="nav-logo"
                route={() => push("/")}>&lt;Recharts /&gt;</Link>
            </h1>
            <nav>
              <ul className="nav" id="nav">
                <li>
                  <Link
                    className="nav-link"
                    activeCondition={page === 'guide'}
                    route={() => push("/guide")}>Guide</Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    activeCondition={page === 'api'}
                    route={() => push("/api")}>API</Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    activeCondition={page === 'examples'}
                    route={() => push("/examples")}>Examples</Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    activeCondition={page === 'blog'}
                    route={() => push("/blog")}>Blog</Link>
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
          <p>Released under the <a href="http://opensource.org/licenses/MIT" target="_blank">MIT License</a></p>
          <p>Copyright (c) 2016 Recharts Group</p>
        </footer>
      </div>
    );
  }
}

export default Frame;
