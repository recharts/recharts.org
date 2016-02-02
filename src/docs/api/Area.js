export default {
  name: 'Area',
  props: [
    {
      name: 'type',
      type: 'String',
      defaultVal: '\'linear\'',
      isOptional: false,
      desc: 'The interpolation type of area, which can be \'linear\', \'monotone\', \'step\', \'stepBefore\', \'stepAfter\'',
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
      name: 'curve',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If false set, curve will not be drawed.',
    }, {
      name: 'baseLineType',
      type: 'String',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The type of baseline in an area, which can be horizontal, vertical or curve, usually calculated internally.',
    }, {
      name: 'baseLine',
      type: 'Number | Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The value which can describle the line, usually calculated internally.',
    }, {
      name: 'points',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The coordinates of all the points in the area, usually calculated internally.',
    }, {
      name: 'stackId',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The stack id of area, when two areas have the same value axis and same stackId, then the two areas area stacked in order.',
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
      name: 'Simple AreaChart',
      url: '/examples#SimpleAreaChart',
    },
    {
      name: 'Stacked AreaChart',
      url: '/examples#StackedAreaChart',
    },
    {
      name: 'Tiny AreaChart',
      url: '/examples#TinyAreaChart',
    }
  ]
};
