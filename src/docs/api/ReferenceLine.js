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
      name: 'type',
      type: '\'horizontal\', \'vertical\'',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The type of line. If set \'horizontal\', the reference line is parallel to x-axis. If set \'vertical\', the reference line is parallel to y-axis.',
    }, {
      name: 'value',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The value which displayed by the line. If the type of line is \'horizontal\', the option must be consistent with corresponding y-axis. If the type of line is \'vertical\', the option must be consistent with corresponding x-axis.',
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
      url: '//jsfiddle.net/ukLgfra1/embedded/result/',
      code: `<AreaChart width={300} height={200} data={data}
  margin={{top: 10, right: 30, left: 0, bottom: 0}}>
  <XAxis dataKey="name"/>
  <YAxis/>
  <CartesianGrid strokeDasharray="3 3"/>
  <Tooltip/>
  <ReferenceLine type="vertical" value="Page C" stroke="green" label="Min PAGE"/>
  <ReferenceLine type="horizontal" value={4000} label="Max" stroke="red" strokeDasharray="3 3"/>
  <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
</AreaChart>
`,
    },
  ]
};
