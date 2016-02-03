import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import Highlight from 'utils/Highlight';
import './IndexView.scss';

const data = [{ name: 'A', uv: 400, pv: 240, amt: 2400 },
              { name: 'B', uv: 300, pv: 456, amt: 2400 },
              { name: 'C', uv: 300, pv: 139, amt: 2400 },
              { name: 'D', uv: 200, pv: 980, amt: 2400 },
              { name: 'E', uv: 278, pv: 390, amt: 2400 },
              { name: 'F', uv: 189, pv: 480, amt: 2400 }];

class IndexView extends Component {
  render() {
    const exCode = `
  <LineChart width={400} height={300} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>
    `;

    return (
      <div className="page page-index">
        <div className="desc">
          <p className="title">Recharts = React + Charts</p>
          <p className="subtitle">Re-designed charting library built with React</p>
          <p><a href="/guide#installation" className="button install-btn">Install v0.5.0</a></p>
        </div>
        <div className="examples">
          <div className="ex-code">
            <LineChart width={540} height={300} data={data}>
              <XAxis dataKey="name"/>
              <YAxis/>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
            <Highlight className="jsx">{exCode}</Highlight>
          </div>
        </div>
        <div className="features">
          <ul className="feat">
            <li>
              <strong>Componentized</strong>
              <p className="text">Compose your application with decoupled, reusable React components.
              Depend by React Virtual DOM, you will use it more assured.</p>
            </li>
            <li>
              <strong>Comfortable</strong>
              <p className="text">Simplely deploy with configuration of props. Native SVG elements supported,
              and lightweight depend on the D3 submodules, but you don't write D3 code any more.</p>
            </li>
            <li>
              <strong>Customizable</strong>
              <p className="text">Separated components of each chart kind,
              so you can redefine the sub components to realize your mind or use sub components to define new charts.</p>
            </li>
          </ul>
        </div>
        <div className="like">
          <p className="text">Recharts enables deeper integration of charts into your React application</p>
          <p className="btn"><a href="/guide#getting-started" className="button getting-started-btn">Getting Started</a></p>
        </div>
      </div>
    );
  }
}

export default IndexView;
