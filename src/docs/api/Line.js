export default {
  name: 'Line',
  examples: [],
  props: [
    {
      name: 'type',
      type: `'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' |
      'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | Function`,
      defaultVal: '\'linear\'',
      isOptional: false,
      desc: `The interpolation type of line. And customized interpolation function can be set to type. It's the same as type in Area.`,
      examples: [{
        name: 'd3-shape interpolation',
        url: 'https://github.com/d3/d3-shape#curves',
      }, {
        name: 'An AreaChart which has two area with different interpolation.',
        url: '/examples#CardinalAreaChart',
      }],
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
      type: `'line' | 'square' | 'rect'| 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye'`,
      defaultVal: '\'line\'',
      isOptional: false,
      desc: 'The type of icon in legend.',
    }, {
      name: 'dot',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, dots will not be drawn. If true set, dots will be drawn which have the props calculated internally. If object set, dots will be drawn which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom dot element.If set a function, the function will be called to render customized dot.',
      format: [
        `<Line dataKey="value" dot={false} />`,
        `<Line dataKey="value" dot={{ stroke: 'red', strokeWidth: 2 }} />`,
        `<Line dataKey="value" dot={<CustomizedDot />} />`,
        `<Line dataKey="value" dot={renderDot} />`,
      ],
      examples: [{
        name: 'A line chart with customized dot',
        url: '/examples#CustomizedDotLineChart',
      }],
    }, {
      name: 'activeDot',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'true',
      isOptional: false,
      desc: 'The dot is shown when muser enter a line chart and this chart has tooltip. If false set, no active dot will not be drawn. If true set, active dot will be drawn which have the props calculated internally. If object set, active dot will be drawn which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom active dot element.If set a function, the function will be called to render customized active dot.',
      format: [
        `<Line dataKey="value" activeDot={false} />`,
        `<Line dataKey="value" activeDot={{ stroke: 'red', strokeWidth: 2, r: 10 }} />`,
        `<Line dataKey="value" activeDot={<CustomizedActiveDot />} />`,
        `<Line dataKey="value" activeDot={renderDot} />`,
      ],
      examples: [{
        name: 'A simple line chart',
        url: '/examples#SimpleLineChart',
      }],
    },  {
      name: 'label',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, labels will not be drawn. If true set, labels will be drawn which have the props calculated internally. If object set, labels will be drawn which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom label element. If set a function, the function will be called to render customized label.',
      format: [
        `<Line dataKey="value" label />`,
        `<Line dataKey="value" label={{ fill: 'red', fontSize: 20 }} />`,
        `<Line dataKey="value" label={<CustomizedLabel />} />`,
        `<Line dataKey="value" label={renderLabel} />`,
      ],
      examples: [{
        name: 'A line chart with customized label',
        url: '/examples#CustomizedLabelLineChart',
      }],
    }, {
      name: 'points',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The coordinates of all the points in the line, usually calculated internally.',
      format: [`[{x: 12, y: 12, value: 240}]`],
    }, {
      name: 'layout',
      type: `'horizontal', 'vertical'`,
      defaultVal: 'undefined',
      isOptional: true,
      desc: 'The layout of line, usually inherited from parent.',
    }, {
      name: 'formatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The formatter function of data.',
    }, {
      name: 'connectNulls',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: 'Whether to connect a graph line across null points.',
      examples: [{
        name: 'A lineChart connect nulls and a lineChart disconnect nulls',
        url: '/examples#LineChartConnectNulls',
      }]
    }, {
      name: 'unit',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The unit of data. This option will be used in tooltip.',
    }, {
      name: 'name',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The name of data. This option will be used in tooltip and legend to represent a line. If no value was set to this option, the value of dataKey will be used alternatively.',
    }, {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If set false, animation of line will be disabled.',
    }, {
      name: 'animationBegin',
      type: 'Number',
      defaultVal: 0,
      isOptional: false,
      desc: 'Defines when the animation should begin.',
    }, {
      name: 'animationDuration',
      type: 'Number',
      defaultVal: 1500,
      isOptional: false,
      desc: 'Specifies the duration of animation, the unit of this option is ms.',
    }, {
      name: 'animationEasing',
      type: `'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'`,
      defaultVal: `'ease'`,
      isOptional: false,
      desc: 'The type of easing function.',
    },
  ],
};
