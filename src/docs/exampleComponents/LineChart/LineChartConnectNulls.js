import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {name: 'Page A', uv: 4000},
  {name: 'Page B', uv: 3000},
  {name: 'Page C', uv: 2000},
  {name: 'Page D'},
  {name: 'Page E', uv: 1890},
  {name: 'Page F', uv: 2390},
  {name: 'Page G', uv: 3490},
];

export default class SimpleLineChart extends Component {
  static jsfiddleUrl = '//jsfiddle.net/3eap22sn';

  render () {
    return (
      <div>
        <LineChart width={600} height={200} data={data}
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Line type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
        </LineChart>
        <LineChart width={600} height={200} data={data}
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Line connectNulls={true} type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
        </LineChart>
      </div>
    );
  }
};
