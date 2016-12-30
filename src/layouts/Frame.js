import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { getLocaleType, localeGet } from '../utils/LocaleUtils';
import 'styles/app.scss';

const locales = [
  { locale: 'en-US', text: 'En' },
  { locale: 'zh-CN', text: '中文' },
];

@connect((state, ownProps) => {
  return {
    page: ownProps.location.pathname.split('/').filter(item => !!item)[1] || 'index',
  };
})
class Frame extends Component {
  static propTypes = {
    page: PropTypes.string,
    children: PropTypes.node,
  };

  renderLocaleSwitch(curLocale) {
    const { location } = this.props;
    const pathName = location.pathname || '/';

    return (
      <span className="language-sitch">
        {
          locales.map(({ locale, text }, index) => {
            const isActive = locale === curLocale;
            const linkPath = pathName.indexOf(curLocale) >= 0 ?
              pathName.replace(curLocale, locale) :
              `/${locale}`;

            return (
              <span key={`item-${index}`}>
                {index ? (<span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>) : null}
                {
                  isActive ?
                  <span className="switch-item active">{text}</span> :
                  <Link className="switch-item" to={linkPath}>{text}</Link>
                }
              </span>
            );
          })
        }
      </span>
    );
  }

  render() {
    const { page, children } = this.props;
    const locale = getLocaleType(this.props);

    return (
      <div className="container">
        <Helmet titleTemplate={'%s | Recharts'} />
        <header>
          <div className="header-wrapper">
            <h1 className="logo">
              <Link
                className="nav-logo"
                to={`/${locale}`}>&lt;Recharts /&gt;</Link>
            </h1>
            <nav>
              <ul className="nav" id="nav">
                <li>
                  <Link activeClassName="active" className="nav-link" to={`/${locale}/guide`}>
                    {localeGet(locale, 'frame', 'guide')}
                  </Link>
                </li>
                <li>
                  <Link activeClassName="active" className="nav-api" to={`/${locale}/api`}>
                    {localeGet(locale, 'frame', 'api')}
                  </Link>
                </li>
                <li>
                  <Link activeClassName="active" className="nav-examples" to={`/${locale}/examples`}>
                    {localeGet(locale, 'frame', 'examples')}
                  </Link>
                </li>
                <li>
                  <Link activeClassName="active" className="nav-link" to={`/${locale}/blog`}>
                    {localeGet(locale, 'frame', 'blog')}
                  </Link>
                </li>
                <li className="github-wrapper">
                  <a href="https://github.com/recharts/recharts"
                    target="_blank"
                    className="nav-github">Github</a>
                </li>
                <li className="language-sitch-wrapper">
                  {this.renderLocaleSwitch(locale)}
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
