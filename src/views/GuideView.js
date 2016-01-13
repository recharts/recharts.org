import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Installation, GettingStarted, Customize } from 'components/GuideView';

class GuideView extends Component {
  render() {
    return (
      <div className="page page-guide">
        <div className="sidebar">
          <h2>Guide</h2>
          <ul className="menu">
            <li><a href="#Installation">Installation</a></li>
            <li><a href="#Getting_Started">Getting Started</a></li>
            <li><a href="#Customize">Customize</a></li>
          </ul>
        </div>
        <div className="content">
          <Installation />
          <GettingStarted />
          <Customize />
        </div>
      </div>
    );
  }
}

export default GuideView;
