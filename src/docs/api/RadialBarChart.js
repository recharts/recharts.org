import React from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const data = [
  { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
  { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },
  { name: '30-34', uv: -15.69, pv: 1398, fill: '#8dd1e1' },
  { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d' },
  { name: '40-49', uv: -8.63, pv: 3908, fill: '#a4de6c' },
  { name: '50+', uv: -2.63, pv: 4800, fill: '#d0ed57' },
  { name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658' },
];

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};

const example = () => (
  <RadialBarChart width={730} height={250} innerRadius="10%" outerRadius="80%" data={data}>
    <RadialBar startAngle={90} endAngle={-270} minAngle={15} label background clockWise={true} dataKey='uv' />
    <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
    <Tooltip />
  </RadialBarChart>
);

export default {
  name: 'RadialBarChart',
  examples: [{
      name: 'Simple RadialBarChart',
      demo: example,
      code: `<RadialBarChart cx="40%" cy="50%" innerRadius="10%" outerRadius="80%" data={data}>
  <RadialBar startAngle={90} endAngle={-270} minAngle={15} label background clockWise={true} dataKey='uv' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>
` }],
  props: [
    {
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
      desc: 'The width of chart container.',
    }, {
      name: 'data',
      type: 'Array',
      defaultVal: 'undefined',
      isOptional: false,
      desc: 'The source data which each element is an object.',
      format: ['[{name: \'a\', value: 12}]'],
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 5, right: 5, bottom: 5, left: 5 }',
      isOptional: false,
      desc: 'The sizes of whitespace around the container.',
      format: ['{ top: 5, right: 5, bottom: 5, left: 5 }'],
    }, {
      name: 'barCategoryGap',
      type: 'Percentage| Number',
      defaultVal: '\'10%\'',
      isOptional: false,
      desc: 'The gab between two bar categorys which can be percent value and a fixed value.',
    }, {
      name: 'barGap',
      type: 'Number',
      defaultVal: 4,
      isOptional: false,
      desc: 'The gab between two bar in the same category.',
    }, {
      name: 'cx',
      type: 'Percentage | Number',
      defaultVal: '\'50%\'',
      isOptional: false,
      desc: 'The x-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of width.',
    }, {
      name: 'cy',
      type: 'Percentage | Number',
      defaultVal: '\'50%\'',
      isOptional: false,
      desc: 'The y-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of width.',
    }, {
      name: 'innerRadius',
      type: 'Percentage | Number',
      defaultVal: '\'30%\'',
      isOptional: false,
      desc: 'The innerRadius of the radial bar which is most close to the center. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
    }, {
      name: 'outerRadius',
      type: 'Percentage | Number',
      defaultVal: '\'100%\'',
      isOptional: false,
      desc: 'The outerRadius of the radial bar which is most far away from the center. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
    }, {
      name: 'barSize',
      type: 'Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: 'The width or height of each bar. If the barSize is not specified, the size of bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.',
    },
  ],
};
