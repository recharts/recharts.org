import React, { Component } from 'react';
import { connect } from 'react-redux';

class APIView extends Component {
  render() {
    return (
      <div className="page page-api">
        <div className="sidebar">
          <h2>API</h2>
          <ul className="menu">
            <li><a href="#Area">Area</a></li>
            <li><a href="#Bar">Bar</a></li>
            <li><a href="#Line">Line</a></li>
          </ul>
        </div>
        <div className="content">
          <div className="mod-area" id="Area">
            <h3>Area</h3>
            <h4>Properties</h4>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>area</td>
                  <td>boolean</td>
                  <td>true</td>
                  <td><em>optaional.</em> The classname of the icon on the left of the app bar. If you are using a stylesheet for your icons, enter the class name for the icon to be used here.</td>
                </tr>
                <tr>
                  <td>area</td>
                  <td>boolean</td>
                  <td>true</td>
                  <td><em>optaional.</em> The classname of the icon on the left of the app bar. If you are using a stylesheet for your icons, enter the class name for the icon to be used here.</td>
                </tr>
                <tr>
                  <td>area</td>
                  <td>boolean</td>
                  <td>true</td>
                  <td><em>optaional.</em> The classname of the icon on the left of the app bar. If you are using a stylesheet for your icons, enter the class name for the icon to be used here.</td>
                </tr>
              </tbody>
            </table>
            <h4>Examples</h4>
            <p><a href="/examples#areaChart">Simple AreaChart</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default APIView;
