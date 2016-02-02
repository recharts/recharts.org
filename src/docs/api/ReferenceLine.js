export default {
  name: 'ReferenceLine',
  props: [
    {
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
      name: 'type',
      type: 'String',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The type of line, which can be \'horizontal\', \'vertical\'.',
    }, {
      name: 'value',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The value which displayed by the line.',
    }, {
      name: 'viewBox',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The box of viewing area, which has the shape of {x: someVal, y: someVal, width: someVal, height: someVal}, usually calculated internally.',
    }, {
      name: 'xAxisMap',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The configurations of all the x-axes in the chart, usually calculated internally.',
    }, {
      name: 'yAxisMap',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The configurations of all the y-axes in the chart, usually calculated internally.',
    },
  ],
  examples: [
    {
      name: 'BarChart with positive and negative values',
      url: '/examples#PositiveAndNegativeBarChart'
    }
  ]
};
