export default {
  name: 'Area',
  examples: [],
  props: [
    {
      name: 'type',
      type: `'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' |
      'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | Function`,
      defaultVal: '\'linear\'',
      isOptional: false,
      desc: 'The interpolation type of area. And customized interpolation function can be set to type.',
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
      defaultVal: 'undefined',
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
      type: '\'line\', \'scatter\', \'square\', \'rect\'',
      defaultVal: '\'line\'',
      isOptional: false,
      desc: 'The type of icon in legend.',
    }, {
      name: 'dot',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, dots will not be drawed. If true set, dots will be drawed which have the props calculated internally. If object set, dots will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom dot element. If set a function, the function will be called to render customized dot.',
      format: [
        `<Area dataKey="value" dot={false} />`,
        `<Area dataKey="value" dot={{ stroke: 'red', strokeWidth: 2 }} />`,
        `<Area dataKey="value" dot={<CustomizedDot />} />`,
        `<Area dataKey="value" dot={renderDot}/>`,
      ],
    }, {
      name: 'activeDot',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'true',
      isOptional: false,
      desc: 'The dot is shown when muser enter a area chart and this chart has tooltip. If false set, no active dot will not be drawed. If true set, active dot will be drawed which have the props calculated internally. If object set, active dot will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom active dot element.If set a function, the function will be called to render customized active dot.',
      format: [
        `<Area dataKey="value" activeDot={false} />`,
        `<Area dataKey="value" activeDot={{ stroke: 'red', strokeWidth: 2, r: 10 }} />`,
        `<Area dataKey="value" activeDot={<CustomizedActiveDot />} />`,
        `<Area dataKey="value" activeDot={renderDot} />`,
      ],
    }, {
      name: 'label',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, labels will not be drawed. If true set, labels will be drawed which have the props calculated internally. If object set, labels will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom label element. If set a function, the function will be called to render customized label.',
      format: [
        `<Area dataKey="value" label />`,
        `<Area dataKey="value" label={{ fill: 'red', fontSize: 20 }} />`,
        `<Area dataKey="value" label={<CustomizedLabel />} />`,
        `<Area dataKey="value" label={renderLabel} />`,
      ],
    }, {
      name: 'curve',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If false set, curve will not be drawed.',
    }, {
      name: 'layout',
      type: `'horizontal', 'vertical'`,
      defaultVal: 'undefined',
      isOptional: true,
      desc: 'The layout of area, usually inherited from parent.',
    }, {
      name: 'baseLine',
      type: 'Number | Array',
      defaultVal: 'undefined',
      isOptional: false,
      desc: 'The value which can describle the line, usually calculated internally.',
      format: [
        `<Area dataKey="value" baseLine={8} />`,
        `<Area dataKey="value" baseLine={[{ x: 12, y: 15 }]} />`,
      ],
    }, {
      name: 'points',
      type: 'Array',
      defaultVal: 'undefined',
      isOptional: false,
      desc: 'The coordinates of all the points in the area, usually calculated internally.',
      format: [`[{ x: 12, y: 12, value: 240 }]`],
    }, {
      name: 'stackId',
      type: 'String | Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: 'The stack id of area, when two areas have the same value axis and same stackId, then the two areas area stacked in order.',
      format: [
        `<AreaChart data={data} width={400} height={300}>
  <Area stackId="pv" dataKey="pv01" />
  <Area stackId="pv" dataKey="pv02" />
  <Area stackId="uv" dataKey="uv01" />
  <Area stackId="uv" dataKey="uv02" />
</AreaChart>
`
      ],
      examples: [{
        name: 'A stacked area chart',
        url: '/examples#StackedAreaChart'
      }],
    }, {
      name: 'formatter',
      type: 'Function',
      defaultVal: 'undefined',
      isOptional: true,
      desc: 'The formatter function of data.',
    }, {
      name: 'unit',
      type: 'String | Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: 'The unit of data. This option will be used in tooltip.',
    }, {
      name: 'name',
      type: 'String | Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: 'The name of data. This option will be used in tooltip and legend to represent a area. If no value was set to this option, the value of dataKey will be used alternatively.',
    }, {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If set false, animation of area will be disabled.',
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
