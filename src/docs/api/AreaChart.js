export default {
  name: 'AreaChart',
  props: [
    {
      name: 'layout',
      type: '\'horizontal\' , \'vertical\'',
      defaultVal: '\'horizontal\'',
      isOptional: false,
      desc: 'The layout of area in the chart.',
    }, {
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
      name: 'data',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The source data which each element is an object.',
      format: ['[{name: \'a\', value: 12}]']
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 5, right: 5, bottom: 5, left: 5 }',
      isOptional: false,
      desc: 'The sizes of whitespace around the container.',
      format: ['{ top: 5, right: 5, bottom: 5, left: 5 }'],
    },
  ],
  examples: [
    {
      name: 'Simple AreaChart',
      url: '//jsfiddle.net/Lz1cs3v6/embedded/result/',
      code: `<AreaChart width={300} height={200} data={data}
  margin={{top: 10, right: 30, left: 0, bottom: 0}}>
  <XAxis dataKey="name"/>
  <YAxis/>
  <CartesianGrid strokeDasharray="3 3"/>
  <Tooltip/>
  <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
</AreaChart>
`,
    },
  ]
};
