export default {
  name: 'LineChart',
  props: [
    {
      name: 'layout',
      type: '\'horizontal\' , \'vertical\'',
      defaultVal: '\'horizontal\'',
      isOptional: false,
      desc: 'The layout of lines in the chart.',
    }, {
      name: 'syncId',
      type: 'String',
      isOptional: true,
      desc: 'If any two categorical charts(LineChart, AreaChart, BarChart, ComposedChart) have the same syncId, these two charts can sync the position tooltip, and the startIndex, endIndex of Brush.',
      examples: [{
        name: "Two synchronized LineChart and an AreaChart",
        url: '/examples#SynchronizedLineChart',
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
