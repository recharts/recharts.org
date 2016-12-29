export default {
  name: 'ComposedChart',
  desc: 'A chart composed of line, area, and bar charts. When you just want to draw a chart of a single type like line, then LineChart is recommended.',
  props: [
    {
      name: 'layout',
      type: '\'horizontal\' , \'vertical\'',
      defaultVal: '\'horizontal\'',
      isOptional: false,
      desc: 'The layout of areas, lines, or bars in the chart.',
    }, {
      name: 'syncId',
      type: 'String',
      isOptional: true,
      desc: 'If any two categorical charts(LineChart, AreaChart, BarChart, ComposedChart) have the same syncId, these two charts can sync the position tooltip, and the startIndex, endIndex of Brush.',
      examples: [{
        name: "Two synchronized AreaChart",
        url: '/examples#SynchronizedAreaChart',
      }]
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
      desc: 'The height of chart container.',
    }, {
      name: 'data',
      type: 'Array',
      defaultVal: 'undefined',
      isOptional: false,
      desc: 'The source data, in which each element is an object.',
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
      desc: 'The gap between two bar categories, which can be a percent value or a fixed value.',
    }, {
      name: 'barGap',
      type: 'Number',
      defaultVal: 4,
      isOptional: false,
      desc: 'The gap between two bars in the same category.',
    }, {
      name: 'barSize',
      type: 'Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: 'The width or height of each bar. If the barSize is not specified, the size of the bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.',
    }, {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of click in this chart.',
    }, {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseenter in this chart.',
    }, {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mousemove in this chart.',
    }, {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseleave in this chart.',
    },
  ],
};
