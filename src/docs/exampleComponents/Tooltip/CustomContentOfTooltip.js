import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];


const getIntroOfPage = (label) => {
  if (label === 'Page A') {
    return "Page A is about men's clothing";
  } else if (label === 'Page B') {
    return "Page B is about women's dress";
  } else if (label === 'Page C') {
    return "Page C is about women's bag";
  } else if (label === 'Page D') {
    return "Page D is about household goods";
  } else if (label === 'Page E') {
    return "Page E is about food";
  } else if (label === 'Page F') {
    return "Page F is about baby food";
  }
};

const CustomTooltip  = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};

export default class Example extends Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/vxq4ep63/';

  render () {
    return (
      <BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip content={<CustomTooltip />}/>
        <Legend />
        <Bar dataKey="pv" barSize={20} fill="#8884d8" />
      </BarChart>
    );
  }
};
