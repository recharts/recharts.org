import React, { Component } from 'react';
import Highlight from 'utils/Highlight';
import { LineChart, LineItem, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [{name: '上海', uv: 400, pv: 2400, amt: 2400},
              {name: '北京', uv: 300, pv: 4567, amt: 2400},
              {name: '杭州', uv: 300, pv: 1398, amt: 2400},
              {name: '上饶', uv: 200, pv: 9800, amt: 2400},
              {name: '台湾', uv: 278, pv: 3908, amt: 2400},
              {name: '香港', uv: 189, pv: 4800, amt: 2400}];

const GettingStarted = () => {
  return (
    <div className="mod-getting-started" id="Getting_Started">
      <h3>Getting Started</h3>
      <h4>Generate Chart</h4>
      <p>Recharts generates charts by React components.</p>
      <Highlight className="jsx">
      {`<LineChart width={400} height={400} data={data}>
  <CartesianGrid stroke='#f5f5f5'/>
  <LineItem type='monotone' dataKey='uv' stroke='#ff7300'/>
</LineChart>`}
      </Highlight>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke='#f5f5f5' />
        <LineItem type='monotone' dataKey='uv' stroke='#ff7300' />
      </LineChart>
    </div>
  );
}

export default GettingStarted;
