import React from 'react';
import { ResponsiveContainer, ScatterChart, XAxis, YAxis, Scatter, CartesianGrid, Tooltip, ReferenceDot } from 'recharts';

const data = [
  { x: 100, y: 200, z: 200 }, { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 }, { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 }, { x: 110, y: 280, z: 200 },
];

const getMeanValue = (o) => {
	const len = o.length;

  if (!len) { return null; }

	return o.reduce((result, entry) => {
  	return {
    	x: result.x + (entry.x || 0) / len,
      y: result.y + (entry.y || 0) / len,
    };
  }, { x: 0, y: 0 });
};

const example = () => {
  const mean = getMeanValue(data);

  return (
    <ScatterChart width={730} height={250} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <XAxis dataKey={'x'} name="stature" unit="cm" />
      <YAxis dataKey={'y'} name="weight" unit="kg" />
      <Scatter name="A school" data={data} fill="#8884d8" />
      <CartesianGrid />
      { mean && <ReferenceDot {...mean} r={20} fill="red" stroke="none" /> }
      <Tooltip cursor={{strokeDasharray: '3 3'}} />
    </ScatterChart>
  )
};

export default {
  name: 'ReferenceDot',
  examples: [{
      name: 'A ScatterChart with ReferenceDot',
      demo: example,
      code: `<ScatterChart width={730} height={250} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
  <XAxis dataKey={'x'} name="stature" unit="cm" />
  <YAxis dataKey={'y'} name="weight" unit="kg" />
  <Scatter name="A school" data={data} fill="#8884d8" />
  <CartesianGrid />
  { mean && <ReferenceDot {...mean} r={20} fill="red" stroke="none" /> }
  <Tooltip cursor={{strokeDasharray: '3 3'}} />
</ScatterChart>`}],
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
      name: 'x',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: false,
      desc: 'If the x-axis specified by xAxisId is a number axis, the type of x must be Number. If the x-axis specified by xAxisId is a category axis, the value of x must be one of the categorys, otherwise no dot will be drawn.',
    }, {
      name: 'y',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: false,
      desc: 'If the y-axis specified by yAxisId is a number axis, the type of y must be Number. If the y-axis specified by yAxisId is a category axis, the value of y must be one of the categorys, otherwise no dot will be drawn.',
    }, {
      name: 'alwaysShow',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If set true, the value of reference dot will be take into account when calculate the domain of corresponding axis, so that the reference dot will always show.',
    }, {
      name: 'xAxisMap',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The configurations of all the x-axes in the chart, usually calculated internally.',
    }, {
      name: 'yAxisMap',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The configurations of all the y-axes in the chart, usually calculated internally.',
    }, {
      name: 'label',
      type: 'String | Number | ReactElement | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set a string or a number, default label will be drawed, and the option is content. If set a React element, the option is the custom react element of drawing label. If set a function, the function will be called to render customized dot.',
      format: [
        `<ReferenceDot x="a" y={400} label="MAX"/>`,
        `<ReferenceDot x="a" y={400} label={<CustomizedLabel />}/>`,
        `<ReferenceDot x="a" y={400} label={renderLabel}/>`,
      ],
    },
  ],
};
