export default {
  name: 'YAxis',
  props: [
    {
      name: 'hide',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If set true, the axis do not display in the chart.',
    }, {
      name: 'dataKey',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The key of data displayed in the axis.',
    }, {
      name: 'yAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The unique id of y-axis.',
    }, {
      name: 'width',
      type: 'Number',
      defaultVal: '60',
      isOptional: false,
      desc: 'The width of axis, which can be setted by user.',
    }, {
      name: 'hight',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The height of axis which is usually calculated internally.',
    }, {
      name: 'orient',
      type: 'String',
      defaultVal: 'left',
      isOptional: false,
      desc: 'The orientation of axis, which can be left, right.',
    }, {
      name: 'type',
      type: 'String',
      defaultVal: 'number',
      isOptional: false,
      desc: 'The type of axis, which can be number, category.',
    }, {
      name: 'tickCount',
      type: 'Number',
      defaultVal: '5',
      isOptional: false,
      desc: 'The number of axis ticks.',
    }, {
      name: 'tickFormatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The formatter function of tick.',
    }, {
      name: 'ticks',
      type: 'Array',
      defaultVal: 'null',
      isOptional: true,
      desc: 'Set the values of axis ticks manually.',
    }, {
      name: 'unit',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The unit of data displayed in the axis.',
    }, {
      name: 'name',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The name of data displayed in the axis.',
    },
  ],
  examples: [
    {
      name: 'Simple AreaChart',
      url: '/examples/SimpleAreaChart',
    },
    {
      name: 'Simple BarChart',
      url: '/examples/SimpleBarChart',
    },
    {
      name: 'Simple LineChart',
      url: '/examples/SimpleLineChart',
    },
    {
      name: 'ComposedChart of a line, a bar and a area',
      url: '/examples/LineBarAreaComposedChart',
    },
    {
      name: 'Simple ScatterChart',
      url: '/examples/SimpleScatterChart',
    },
  ]
};
