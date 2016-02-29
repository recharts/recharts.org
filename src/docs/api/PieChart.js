import React from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];

const example = () => (
  <PieChart width={730} height={250}>
    <Pie data={data01} cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
    <Pie data={data02} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
  </PieChart>
);

export default {
  name: 'PieChart',
  examples: [
    {
      name: 'Simple PieChart',
      demo: example,
      code: `<PieChart width={730} height={250}>
  <Pie data={data01} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
  <Pie data={data02} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
</PieChart>
`,
    },
  ],
  props: [
    {
      name: 'width',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The width of chart container.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The width of chart container.',
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 0, right: 0, bottom: 0, left: 0 }',
      isOptional: false,
      desc: 'The sizes of whitespace around the container.',
      format: ['{ top: 5, right: 5, bottom: 5, left: 5 }'],
    }, {
      name: 'onMouseEnter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The function will be called when mouse enter sectors of a pie chart.'
    }, {
      name: 'onMouseLeave',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The function will be called when mouse leave sectors of a pie chart.'
    }, {
      name: 'onClick',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The function will be called when click sectors of a pie chart.'
    },
  ],
};
