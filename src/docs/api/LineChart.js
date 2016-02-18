export default {
  name: 'LineChart',
  props: [
    {
      name: 'layout',
      type: '\'horizontal\' , \'vertical\'',
      defaultVal: '\'horizontal\'',
      isOptional: false,
      desc: 'The layout of line in the chart.',
    }, {
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
      name: 'Simple LineChart',
      url: '//jsfiddle.net/a5vxamjs/embedded/result/',
      code: `<LineChart width={600} height={300} data={data}
      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
 <XAxis dataKey="name"/>
 <YAxis/>
 <CartesianGrid strokeDasharray="3 3"/>
 <Tooltip/>
 <Legend />
 <Line type="monotone" dataKey="pv" stroke="#8884d8" />
 <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>`
    },
  ]
};
