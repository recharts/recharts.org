export default {
  name: 'ComposedChart',
  desc: 'A composed chart of line, area, bar. When you just want to draw chart of single type like line, then LineChart is recommended.',
  props: [
    {
      name: 'layout',
      type: '\'horizontal\' , \'vertical\'',
      defaultVal: '\'horizontal\'',
      isOptional: false,
      desc: 'The layout of area, line, bar in the chart.',
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
    }, {
      name: 'barCategoryGap',
      type: 'Percentage | Number',
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
      name: 'barSize',
      type: 'Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: 'The width or height of each bar. If the barSize is not specified, the size of bar will be caculated by the barCategoryGap, barGap and the quantity of bar groups.',
    },
  ],
  examples: [
    {
      name: 'Simple LineChart',
      url: '//jsfiddle.net/a5vxamjs/embedded/result/',
      code: `<ComposedChart width={600} height={400} data={data}>
  <XAxis dataKey="name"/>
  <YAxis />
  <Tooltip/>
  <Legend/>
  <CartesianGrid stroke='#f5f5f5'/>
  <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8'/>
  <Bar dataKey='pv' barSize={20} fill='#413ea0'/>
  <Line type='monotone' dataKey='uv' stroke='#ff7300'/>
</ComposedChart>`
    },
  ]
};
