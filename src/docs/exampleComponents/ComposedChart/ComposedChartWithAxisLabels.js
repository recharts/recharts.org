import React, { Component } from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend } from 'recharts';

const data = [
  {name: 'Page A', uv: 590, pv: 800, amt: 1400},
  {name: 'Page B', uv: 868, pv: 967, amt: 1506},
  {name: 'Page C', uv: 1397, pv: 1098, amt: 989},
  {name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
  {name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
  {name: 'Page F', uv: 1400, pv: 680, amt: 1700},
];

export default class Example extends Component {
  static jsfiddleUrl = '//jsfiddle.net/bdkoh6e3';

  render () {
    return (
      <ComposedChart width={600} height={400} data={data}
          margin={{top: 20, right: 80, bottom: 20, left: 20}}>
        <XAxis dataKey="name" label={{ value: "Pages", position: 'insideBottomRight', offset: 0 }}/>
        <YAxis label={{ value: "Index", angle: -90, position: 'insideLeft' }}/>
        <Tooltip/>
        <Legend/>
        <CartesianGrid stroke='#f5f5f5'/>
        <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8'/>
        <Bar dataKey='pv' barSize={20} fill='#413ea0'/>
        <Line type='monotone' dataKey='uv' stroke='#ff7300'/>
      </ComposedChart>
    );
  }
};
