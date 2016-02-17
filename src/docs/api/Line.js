export default {
  name: 'Line',
  props: [
    {
      name: 'type',
      type: 'String',
      defaultVal: '\'linear\'',
      isOptional: false,
      desc: 'The interpolation type of line, which can be \'linear\', \'monotone\', \'step\', \'stepBefore\', \'stepAfter\'',
    }, {
      name: 'dataKey',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The key of a group of data which should be unique in an area chart.',
    }, {
      name: 'xAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The id of x-axis which is corresponding to the data.',
    }, {
      name: 'yAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The id of y-axis which is corresponding to the data.',
    }, {
      name: 'legendType',
      type: 'String',
      defaultVal: '\'line\'',
      isOptional: false,
      desc: 'The type of icon in legend, which can be \'line\', \'scatter\', \'square\', \'rect\'.',
    }, {
      name: 'dot',
      type: 'Boolean | Object | ReactElement',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, dots will not be drawed. If true set, dots will be drawed which have the props calculated internally. If object set, dots will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom dot element.',
    }, {
      name: 'label',
      type: 'Boolean | Object | ReactElement',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, labels will not be drawed. If true set, labels will be drawed which have the props calculated internally. If object set, labels will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom label element.',
    }, {
      name: 'points',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The coordinates of all the points in the line, usually calculated internally.',
    }, {
      name: 'formatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The formatter function of data.',
    }, {
      name: 'unit',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The unit of data.',
    }, {
      name: 'name',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The name of data.',
    },
  ],
  examples: [
    {
      name: 'Simple LineChart',
      url: '/examples#SimpleLineChart',
    },
    {
      name: 'Tiny LineChart',
      url: '/examples#TinyLineChart',
    },
    {
      name: 'Vertical LineChart',
      url: '/examples#VerticalLineChart',
    },
    {
      name: 'LineChart with two number axes',
      url: '/examples#BiaxialLineChart',
    },
    {
      name: 'ComposedChart of a line, a bar and a area',
      url: '/examples#LineBarAreaComposedChart',
    },
    {
      name: 'Vertical ComposedChart',
      url: '/examples#LineBarAreaComposedChart',
    },
    {
      name: 'ComposedChart of a line and a bar which both display the same data',
      url: '/examples#SameDataComposedChart',
    },
  ]
};
