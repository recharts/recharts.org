export default {
  name: 'CartesianAxis',
  examples: [],
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
      name: 'orientation',
      type: '\'top\', \'bottom\', \'left\' or \'right\'',
      defaultVal: '\'bottom\'',
      isOptional: false,
      desc: 'The orientation of axis.',
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
      name: 'minTickGap',
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
      name: 'tick',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set false, no ticks will be drawed. If set a object, the option is the configuration of ticks. If set a React element, the option is the custom react element of drawing ticks. If set a function, the function will be called to render customized tick.',
      examples: [{
        name: 'A line chart with customized x-axis tick',
        url: '/examples#CustomizedLabelLineChart',
      }],
    }, {
      name: 'label',
      type: 'String | Number | ReactElement | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set a string or a number, default label will be drawed, and the option is content. If set a React element, the option is the custom react element of drawing label. If set a function, the function will be called to render customized label.',
    },
  ],
};
