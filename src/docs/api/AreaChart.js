export default {
  name: 'AreaChart',
  desc: 'All svg elements can be added into the AreaChart component, such as defs, linearGradient, etc.',
  props: [
    {
      name: 'layout',
      type: '\'horizontal\' , \'vertical\'',
      defaultVal: '\'horizontal\'',
      isOptional: false,
      desc: 'The layout of area in the chart.',
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
      defaultVal: 'null',
      isOptional: false,
      desc: 'The width of chart container.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The height of chart container.',
    }, {
      name: 'data',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The source data, in which each element is an object.',
      format: ['[{ name: \'a\', value: 12 }]']
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 5, right: 5, bottom: 5, left: 5 }',
      isOptional: false,
      desc: 'The sizes of whitespace around the container.',
      format: ['{ top: 5, right: 5, bottom: 5, left: 5 }'],
    }, {
      name: 'stackOffset',
      type: `'expand', 'none', 'wiggle', 'silhouette'`,
      defaultVal: `'none'`,
      isOptional: false,
      desc: 'The type of offset function used to generate the lower and upper values in the series array. The four types are built-in offsets in d3-shape.',
      examples: [{
        name: `An AreaChart with stackOffset specified to 'expand'`,
        url: '/examples#PercentAreaChart',
      }],
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
