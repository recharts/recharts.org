export default {
  name: 'BarChart',
  props: [
    {
      name: 'layout',
      type: '\'horizontal\' , \'vertical\'',
      defaultVal: '\'horizontal\'',
      isOptional: false,
      desc: 'The layout of bar in the chart.',
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
      examples: [
        {
          name: 'Tiny BarChart',
          url: '/examples#TinyBarChart',
        },
        {
          name: 'Mix BarChart with stacked bars and unstacked bars ',
          url: '/examples#MixBarChart',
        },
      ],
    },
  ],
  examples: [
    {
      name: 'Simple BarChart',
      url: '//jsfiddle.net/weomrc4q/embedded/result/',
      code: `<BarChart width={300} height={200} data={data}>
 <XAxis dataKey="name"/>
 <YAxis/>
 <CartesianGrid strokeDasharray="3 3"/>
 <Tooltip/>
 <Legend />
 <Bar dataKey="pv" fill="#8884d8" />
 <Bar dataKey="uv" fill="#82ca9d" />
</BarChart>`
    },
  ]
};
