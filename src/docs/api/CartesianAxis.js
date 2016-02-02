export default {
  name: 'CartesianAxis',
  props: [
    {
      name: 'x',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The x-coordinate of axis.',
    }, {
      name: 'y',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The y-coordinate of axis.',
    }, {
      name: 'width',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The width of axis.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The height of axis.',
    }, {
      name: 'orient',
      type: 'String',
      defaultVal: '\'bottom\'',
      isOptional: false,
      desc: 'The orientation of axis, which can be \'top\', \'bottom\', \'left\' or \'right\'.',
    }, {
      name: 'viewBox',
      type: 'Object',
      defaultVal: '{ x: 0, y: 0, width: 0, height: 0 }',
      isOptional: false,
      desc: 'The box of viewing area.',
    }, {
      name: 'axisLine',
      type: 'Boolean | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If set false, no axis line will be drawed. If set a object, the option is the configuration of axis line.',
    }, {
      name: 'tickLine',
      type: 'Boolean | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If set false, no axis tick lines will be drawed. If set a object, the option is the configuration of tick lines.',
    }, {
      name: 'minLabelGap',
      type: 'Number',
      defaultVal: '5',
      isOptional: false,
      desc: 'The minimum gab between two adjacent labels.',
    }, {
      name: 'tickSize',
      type: 'Number',
      defaultVal: '6',
      isOptional: false,
      desc: 'The width or height of ticks.',
    }, {
      name: 'interval',
      type: 'String | Number',
      defaultVal: '\'auto\'',
      isOptional: false,
      desc: 'If set auto, the labels which is to be showed or hided will be calculated autoly.',
    }, {
      name: 'label',
      type: 'Boolean | Object | ReactElement',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set false, no labels will be drawed. If set a object, the option is the configuration of labels. If set a React element, the option is the custom react element of drawing labels.',
    },
  ],
  examples: [
    {
      name: 'Simple AreaChart',
      url: '/examples#SimpleAreaChart',
    },
    {
      name: 'Simple ScatterChart',
      url: '/examples#SimpleScatterChart',
    },
  ]
};
