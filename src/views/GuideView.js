import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Installation, GettingStarted, Customize } from 'components/GuideView';
import pureRender from 'pure-render-decorator';

@pureRender
@connect((state, ownProps) => ({
  page: ownProps.location.hash ? ownProps.location.hash.slice(1) : 'installation',
}))
class GuideView extends Component {
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
              <a href="/guide#installation" className={page === 'installation' ? 'active' : ''}>Installation</a>
            </li>
            <li>
              <a href="/guide#getting-started" className={page === 'getting-started' ? 'active' : ''}>Getting Started</a>
            </li>
            <li>
              <a href="/guide#customize" className={page === 'customize' ? 'active' : ''}>Customize</a>
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
