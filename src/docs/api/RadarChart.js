import React from 'react';
import { ResponsiveContainer, RadarChart, Radar, PolarAngleAxis, PolarRadiusAxis, Legend, PolarGrid } from 'recharts';

const data = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
  { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

const example = () => (
  <RadarChart outerRadius={90} width={730} height={250} data={data}>
    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
    <PolarGrid />
    <Legend />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis angle={30} domain={[0, 150]} />
  </RadarChart>
);

export default {
  name: 'RadarChart',
  examples: [{
      name: 'Simple RadarChart',
      demo: example,
      code: `<RadarChart cx={300} cy={250} outerRadius={90} width={730} height={250} data={data}>
  <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  <PolarGrid />
  <Legend />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
</RadarChart>
`,
  }],
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
      desc: 'The y-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of height.',
    }, {
      name: 'startAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The angle of first radial direction line.',
    }, {
      name: 'innerRadius',
      type: 'Percentage | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The inner radius of first circle grid. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
    }, {
      name: 'outerRadius',
      type: 'Percentage | Number',
      defaultVal: '\'80%\'',
      isOptional: false,
      desc: 'The outer radius of last circle grid. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 0, right: 0, bottom: 0, left: 0 }',
      isOptional: false,
      desc: 'The sizes of whitespace around the container.',
      format: ['{ top: 5, right: 5, bottom: 5, left: 5 }'],
    }, {
      name: 'clockWise',
      type: 'Bool',
      defaultVal: 'true',
      isOptional: false,
      desc: 'The direction of clockwise.',
    },
  ],
};
