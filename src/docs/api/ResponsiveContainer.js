import React from 'react';
import { AreaChart, ReferenceLine, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const example = () => (
  <AreaChart width={730} height={250} data={data}
    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
    <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
  </AreaChart>
)

export default {
  name: 'ResponsiveContainer',
  desc: 'A container component to make charts adapt to the size of parent container. The props width and height should be a percentage string.',
  examples: [
    {
      name: 'ResponsiveContainer example',
      url: '//jsfiddle.net/f9r65cc9/embedded/result/',
      demo: example,
      code: `<ResponsiveContainer>
  <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
   <XAxis dataKey="name" />
   <YAxis />
   <CartesianGrid strokeDasharray="3 3" />
   <Tooltip />
   <Legend />
   <Line type="monotone" dataKey="pv" stroke="#8884d8" />
   <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>
</ResponsiveContainer>`
  }],
  props: [
    {
      name: 'width',
      type: 'Percentage | Number',
      defaultVal: '\'100%\'',
      isOptional: false,
      desc: 'The percentage value of the chart\'s width or a fixed width.',
    }, {
      name: 'height',
      type: 'Percentage | Number',
      defaultVal: '\'100%\'',
      isOptional: false,
      desc: 'The percentage value of the chart\'s width or a fixed height.',
    },
  ],
};
