import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, LineItem, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import Highlight from 'utils/Highlight';
import './IndexView.scss';

const data = [{name: '上海', uv: 400, pv: 2400, amt: 2400},
              {name: '北京', uv: 300, pv: 4567, amt: 2400},
              {name: '杭州', uv: 300, pv: 1398, amt: 2400},
              {name: '上饶', uv: 200, pv: 9800, amt: 2400},
              {name: '台湾', uv: 278, pv: 3908, amt: 2400},
              {name: '香港', uv: 189, pv: 4800, amt: 2400}];

class IndexView extends Component {
  render() {
    const exCode = `
  <LineChart width={400} height={300} data={data}>
    <CartesianGrid stroke='#f5f5f5'/>
    <LineItem type='monotone' dataKey='uv' stroke='#ff7300'/>
  </LineChart>
    `;

    return (
      <div className="page page-index">
        <div className="desc">
          <p className="title">Recharts = React + Charts</p>
          <p className="subtitle">Re-designed charting library built with React</p>
          <p><a href="/guide#Installation" className="button install-btn">Install v0.1.0</a></p>
        </div>
        <div className="examples">
          <div className="ex-code">
            <LineChart width={540} height={300} data={data}>
              <CartesianGrid stroke='#f5f5f5' />
              <LineItem type='monotone' dataKey='uv' stroke='#ff7300' />
            </LineChart>
            <Highlight className="jsx">{exCode}</Highlight>
          </div>
        </div>
        <div className="features">
          <ul className="feat">
            <li>
              <strong>Componentized</strong>
              <p className="text">Compose your application with decoupled, reusable React components.
              Depend by React virtual DOM, you will use it more assured.</p>
            </li>
            <li>
              <strong>Comfortable</strong>
              <p className="text">Simplely deploy with configuration of props. Native SVG elements supported,
              and lightweight depend on the D3 submodules, but you don't need to write D3 code any more.</p>
            </li>
            <li>
              <strong>Customizable</strong>
              <p className="text">Separated components of each chart type,
              so you can redefine the sub components to realize your mind or use sub components to define new charts.</p>
            </li>
          </ul>
        </div>
        <div className="like">
          <p className="text">Recharts enables deeper integration of charts into your React application</p>
          <p className="btn"><a href="#" className="button getting-started-btn">Getting Started</a></p>
        </div>
      </div>
    );
  }
}

export default IndexView;
