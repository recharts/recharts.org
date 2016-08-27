import React from 'react';
import { ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, Bar, Line } from 'recharts';

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
  <ComposedChart width={730} height={250} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <CartesianGrid stroke="#f5f5f5" />
    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
  </ComposedChart>
);

export default {
  name: 'ComposedChart',
  desc: 'A chart composed of line, area, and bar charts. When you just want to draw a chart of a single type like line, then LineChart is recommended.',
  examples: [
    {
      name: 'Composed Chart',
      demo: example,
      code: `<ComposedChart width={730} height={250} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <CartesianGrid stroke="#f5f5f5" />
    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
  </ComposedChart>`
    },
  ],
  props: [
    {
      name: 'layout',
      type: '\'horizontal\' , \'vertical\'',
      defaultVal: '\'horizontal\'',
      isOptional: false,
      desc: 'The layout of areas, lines, or bars in the chart.',
    }, {
      name: 'syncId',
      type: 'String',
      isOptional: true,
      desc: 'If any two categorical charts(LineChart, AreaChart, BarChart, ComposedChart) have the same syncId, these two charts can sync the position tooltip, and the startIndex, endIndex of Brush.',
      examples: [{
        name: "Two synchronized AreaChart",
        url: '/examples#SynchronizedAreaChart',
      }]
    }, {
      name: 'width',
      type: 'Number',
      defaultVal: 'undefined',
      isOptional: false,
      desc: 'The width of chart container.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: 'undefined',
      isOptional: false,
      desc: 'The height of chart container.',
    }, {
      name: 'data',
      type: 'Array',
      defaultVal: 'undefined',
      isOptional: false,
      desc: 'The source data, in which each element is an object.',
      format: ['[{name: \'a\', value: 12}]']
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 5, right: 5, bottom: 5, left: 5 }',
      isOptional: false,
      desc: 'The sizes of whitespace around the container.',
      format: ['{ top: 5, right: 5, bottom: 5, left: 5 }'],
    }, {
      name: 'barCategoryGap',
      type: 'Percentage | Number',
      defaultVal: '\'10%\'',
      isOptional: false,
      desc: 'The gap between two bar categories, which can be a percent value or a fixed value.',
    }, {
      name: 'barGap',
      type: 'Number',
      defaultVal: 4,
      isOptional: false,
      desc: 'The gap between two bars in the same category.',
    }, {
      name: 'barSize',
      type: 'Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: 'The width or height of each bar. If the barSize is not specified, the size of the bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.',
    },
    {
      name: 'cursorFill',
      type: 'String',
      defaultVal: '#f1f1f1',
      isOptional: true,
      desc: 'Bar hover fill color',
    },
    {
      name: 'cursorStroke',
      type: 'String',
      defaultVal: '',
      isOptional: true,
      desc: 'Bar hover stroke color, the default is no stroke color',
    },
  ],
};
