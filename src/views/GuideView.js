import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Installation, GettingStarted, Customize } from 'components/GuideView';
import { getLocaleType, localeGet } from '../utils/LocaleUtils';

@connect((state, ownProps) => ({
  page: ownProps.location.hash ? ownProps.location.hash.slice(1) : 'installation',
}))
class GuideView extends Component {
  renderGuide(locale) {
    const { page } = this.props;

    if (page === 'installation') {
      return <Installation locale={locale} />;
    } else if (page === 'getting-started') {
      return <GettingStarted locale={locale} />;
    } else if (page === 'customize') {
      return <Customize locale={locale} />;
    }
  }

  render() {
    const { page } = this.props;
    const locale = getLocaleType(this.props);

    return (
      <div className="page page-guide">
        <div className="sidebar">
          <h2>{localeGet(locale, 'guide', 'guide')}</h2>
          <ul className="menu">
            <li>
              <a href={`/${locale}/guide#installation`} className={page === 'installation' ? 'active' : ''}>
                {localeGet(locale, 'guide', 'installation')}
              </a>
            </li>
            <li>
              <a href={`/${locale}/guide#getting-started`} className={page === 'getting-started' ? 'active' : ''}>
                {localeGet(locale, 'guide', 'getting-started')}
              </a>
            </li>
            <li>
              <a href={`/${locale}/guide#customize`} className={page === 'customize' ? 'active' : ''}>
                {localeGet(locale, 'guide', 'customize')}
              </a>
            </li>
          </ul>
        </div>
        <div className="content">
          {this.renderGuide(locale)}
        </div>
      </div>
    );
  }
}

export default GuideView;
