import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip,
  Legend, ReferenceArea } from 'recharts';

const data01 = [
  { x: 100, y: 200, z: 200 }, { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 }, { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 }, { x: 110, y: 280, z: 200 },
];

const data02 = [
  { x: 200, y: 260, z: 240 }, { x: 240, y: 290, z: 220 },
  { x: 190, y: 290, z: 250 }, { x: 198, y: 250, z: 210 },
  { x: 180, y: 280, z: 260 }, { x: 210, y: 220, z: 230 },
];

const example = () => (
  <ScatterChart width={730} height={250}
    margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
    <XAxis dataKey="x" name="stature" unit="cm" />
    <YAxis dataKey="y" name="weight" unit="kg" />
    <ZAxis dataKey="z" range={[4, 20]} name="score" unit="km" />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    <Legend />
    <Scatter name="A school" data={data01} fill="#8884d8" />
    <Scatter name="B school" data={data02} fill="#82ca9d" />
    <ReferenceArea x1={150} x2={180} y1={200} y2={300} stroke="red" strokeOpacity={0.3} />
  </ScatterChart>
);

export default {
  name: 'ReferenceArea',
  examples: [
    {
      name: 'A ScatterChart with ReferenceArea',
      demo: example,
      code: `<ScatterChart width={730} height={250}
  margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
  <XAxis dataKey="x" name="stature" unit="cm" />
  <YAxis dataKey="y" name="weight" unit="kg" />
  <ZAxis dataKey="z" range={[4, 20]} name="score" unit="km" />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
  <Legend />
  <Scatter name="A school" data={data01} fill="#8884d8" />
  <Scatter name="B school" data={data02} fill="#82ca9d" />
  <ReferenceArea x1={150} x2={180} y1={200} y2={300} stroke="red" strokeOpacity={0.3} />
</ScatterChart>
`,
    },
  ],
  props: [
    {
      name: 'xAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The id of x-axis which is corresponding to the data.',
    }, {
      name: 'yAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The id of y-axis which is corresponding to the data.',
    }, {
      name: 'x1',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: true,
      desc: 'A boundary value of the area. If the specified x-axis is a number axis, the type of x must be Number. If the specified x-axis is a category axis, the value of x must be one of the categorys. If one of x1 or x2 is invalidate, the area will cover along x-axis.',
    }, {
      name: 'x2',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: true,
      desc: 'A boundary value of the area. If the specified x-axis is a number axis, the type of x must be Number. If the specified x-axis is a category axis, the value of x must be one of the categorys. If one of x1 or x2 is invalidate, the area will cover along x-axis.',
    }, {
      name: 'y1',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: true,
      desc: 'A boundary value of the area. If the specified y-axis is a number axis, the type of y must be Number. If the specified y-axis is a category axis, the value of y must be one of the categorys. If one of y1 or y2 is invalidate, the area will cover along y-axis.',
    }, {
      name: 'y2',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: true,
      desc: 'A boundary value of the area. If the specified y-axis is a number axis, the type of y must be Number. If the specified y-axis is a category axis, the value of y must be one of the categorys. If one of y1 or y2 is invalidate, the area will cover along y-axis.',
    }, {
      name: 'alwaysShow',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If the corresponding axis is a number axis and this option is set true, the value of reference line will be take into account when calculate the domain of corresponding axis, so that the reference line will always show.',
      examples: [{
        name: 'A LineChart with alwaysShow ReferenceLine',
        url: '//jsfiddle.net/9shwdgtq/'
      }],
    }, {
      name: 'viewBox',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The box of viewing area, which has the shape of {x: someVal, y: someVal, width: someVal, height: someVal}, usually calculated internally.',
    }, {
      name: 'xAxis',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The configuration of the corresponding x-axis, usually calculated internally.',
    }, {
      name: 'yAxis',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The configuration of the corresponding y-axis, usually calculated internally.',
    }, {
      name: 'label',
      type: 'String | Number | ReactElement | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set a string or a number, default label will be drawn, and the option is content. If set a React element, the option is the custom react element of drawing label. If set a function, the function will be called to render customized label.',
      format: [
        `<ReferenceArea x1="01" x2="08" label="MAX"/>`,
        `<ReferenceArea y1={100} y2={500} label={<CustomizedLabel />}/>`,
      ],
      examples: [{
        name: 'ReferenceLines with label',
        url: '/examples#LineChartWithReferenceLines',
      }]
    }, {
      name: 'isFront',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If set true, the line will be rendered in front of bars in BarChart, etc.'
    },
  ],
};
