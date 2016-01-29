export default {
  name: 'LineChart',
  props: [
    {
      name: 'layout',
      type: 'String',
      defaultVal: 'horizontal',
      isOptional: false,
      desc: 'The layout (horizontal or vertical) of area in the chart.',
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
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 5, right: 5, bottom: 5, left: 5 }',
      isOptional: true,
      desc: 'The sizes of whitespace around the container.',
    },
  ],
  examples: [
    {
      name: 'Simple LineChart',
      url: '/examples/SimpleLineChart',
    },
    {
      name: 'Tiny LineChart',
      url: '/examples/TinyLineChart',
    },
    {
      name: 'Vertical LineChart',
      url: '/examples/VerticalLineChart',
    },
    {
      name: 'LineChart with two number axes',
      url: '/examples/BiaxialLineChart',
    },
  ]
};
