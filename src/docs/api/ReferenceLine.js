export default {
  name: 'ReferenceLine',
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
      isOptional: true,
      desc: 'If set a string or a number, a vertical line perpendicular to the x-axis specified by xAxisId will be drawn. If the specified x-axis is a number axis, the type of x must be Number. If the specified x-axis is a category axis, the value of x must be one of the categorys, otherwise no line will be drawn.',
    }, {
      name: 'y',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set a string or a number, a horizontal line perpendicular to the y-axis specified by yAxisId will be drawn. If the specified y-axis is a number axis, the type of y must be Number. If the specified y-axis is a category axis, the value of y must be one of the categorys, otherwise no line will be drawn.',
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
        `<ReferenceLine type="horizontal" value={400} label="MAX"/>`,
        `<ReferenceLine type="horizontal" value={400} label={<CustomizedLabel />}/>`,
      ],
      examples: [{
        name: 'ReferenceLines with label',
        url: '/examples#LineChartWithReferenceLines',
      }]
    },
  ],
  examples: [
    {
      name: 'A AreaChart with ReferenceLines',
      url: '//jsfiddle.net/9eovm97f/embedded/result/',
      code: `<AreaChart width={300} height={200} data={data}
  margin={{top: 10, right: 30, left: 0, bottom: 0}}>
  <XAxis dataKey="name"/>
  <YAxis/>
  <CartesianGrid strokeDasharray="3 3"/>
  <Tooltip/>
  <ReferenceLine x="Page C" stroke="green" label="Min PAGE"/>
  <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3"/>
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
</AreaChart>
`,
    },
  ]
};
