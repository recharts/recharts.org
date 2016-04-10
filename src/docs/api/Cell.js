import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 500 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];
const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];

const example = () => (
  <PieChart width={730} height={250}>
    <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
      {
        data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]}/>
        ))
      }
    </Pie>
  </PieChart>
);

const barExample = () => (
  <BarChart width={730} height={250} data={data}>
    <Bar dataKey="value">
      {
        data.map((entry, index) => (
          <Cell key={`cell-${index}`} stroke={colors[index]}  strokeWidth={index === 2 ? 4 : 1}/>
        ))
      }
    </Bar>
  </BarChart>
);


export default {
  name: 'Cell',
  desc: 'Cell can be wrapped by Pie, Bar, or RadialBar to specify attributes of each child. In Pie , for example, we can specify the attributes of each child node through data, but the props of Cell have higher priority',
  examples: [{
      name: 'A PieChart with cells',
      demo: example,
      code: `<PieChart width={730} height={250}>
  <Pie data={data} cx="50%" cy="50%" outerRadius={50}>
    \{
      data.map((entry, index) => (
        <Cell key={\`cell-\$\{index\}\`} fill={colors[index]} />
      ))
    \}
  </Pie>
</PieChart>
  `
  }, {
    name: 'A BarChart with cells',
      demo: barExample,
      code: `<BarChart width={730} height={250} data={data}>
  <Bar dataKey="value">
    \{
      data.map((entry, index) => (
        <Cell key={\`cell-\$\{index\}\`} stroke={colors[index]}  strokeWidth={index === 2 ? 4 : 1} />
      ))
    \}
  </Bar>
</BarChart>
  `
  }],
  props: [
    {
      name: 'fill',
      type: 'String',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The presentation attribute of a rectangle in bar or a sector in pie.',
    },
    {
      name: 'stroke',
      type: 'String',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The presentation attribute of a rectangle in bar or a sector in pie.',
    },
  ],
};
