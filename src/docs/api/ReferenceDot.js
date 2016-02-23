export default {
  name: 'ReferenceDot',
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
      type: 'String | Number | ReactElement',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set a string or a number, default label will be drawed, and the option is content. If set a React element, the option is the custom react element of drawing label.',
      format: [
        `<ReferenceDot x="a" y={400} label="MAX"/>`,
        `<ReferenceDot x="a" y={400} label={<CustomizedLabel />}/>`,
      ],
    },
  ],
  examples: [
    {
      name: 'A ScatterChart with ReferenceDot',
      url: '//jsfiddle.net/y2n8Lw55/embedded/result/',
      code: `<ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
  <XAxis dataKey={'x'} name='stature' unit='cm'/>
  <YAxis dataKey={'y'} name='weight' unit='kg'/>
  <Scatter name='A school' data={data} fill='#8884d8'/>
  <CartesianGrid />
  {mean && <ReferenceDot {...mean} r={20} fill="red" stroke="none" />}
  <Tooltip cursor={{strokeDasharray: '3 3'}}/>
</ScatterChart>
`,
    },
  ]
};
