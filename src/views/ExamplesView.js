import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExamplesView extends Component {
  render() {
    return (
      <div className="page page-examples">
        <div className="sidebar">
          <h2>Examples</h2>
          <ul className="menu">
            <li><a href="#LineChart">LineChart</a></li>
            <li><a href="#AreaChart">AreaChart</a></li>
            <li><a href="#Pie">Pie</a></li>
          </ul>
        </div>
        <div className="content">
        </div>
      </div>
    );
  }
}

export default ExamplesView;
