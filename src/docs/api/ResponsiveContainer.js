export default {
  name: 'ResponsiveContainer',
  desc: 'A container component to make charts adapt to the size of parent container. The props width and height should be a percentage string.',
  props: [
    {
      name: 'width',
      type: 'String',
      defaultVal: '\'100%\'',
      isOptional: false,
      desc: 'The percentage value of the chart\'s width.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: '\'100%\'',
      isOptional: false,
      desc: 'The percentage value of the chart\'s width.',
    },
  ],
  examples: [
    {
      name: 'An AreaChart wrapped by ResponsiveContainer',
      url: '/examples#AreaResponsiveContainer',
    },
    {
      name: 'An ComposedChart wrapped by ResponsiveContainer',
      url: '/examples#ComposedResponsiveContainer',
    },
    {
      name: 'A PieChart wrapped by ResponsiveContainer',
      url: '/examples#PieResponsiveContainer',
    },
  ]
};
