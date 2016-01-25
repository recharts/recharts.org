export default {
  name: 'RadialBar',
  props: [
    {
      name: 'cx',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The x-coordinate of center.',
    }, {
      name: 'cy',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The y-coordinate of center.',
    }, {
      name: 'startAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The start angle of all the bars.',
    }, {
      name: 'endAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The end angle of all the bars.',
    }, {
      name: 'clockWise',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: 'The direction of drawing sectors.',
    }, {
      name: 'minAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The minimum angle of each bar.',
    }, {
      name: 'legendType',
      type: 'String',
      defaultVal: 'line',
      isOptional: false,
      desc: 'The type of icon in legend, which can be line, scatter, square, rect.',
    }, {
      name: 'label',
      type: 'Boolean | Object | ReactElement',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, labels will not be drawed. If true set, labels will be drawed which have the props calculated internally. If object set, labels will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom label element.',
    }, {
      name: 'background',
      type: 'Boolean | Object | ReactElement',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, background of bars will not be drawed. If true set, background of bars will be drawed which have the props calculated internally. If object set, background of bars will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom background element.',
    }, {
      name: 'data',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The source data which each element is an object.',
    }, {
      name: 'onMouseEnter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The function will be called when mouse enter the pies.'
    }, {
      name: 'onMouseLeave',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The function will be called when mouse leave the pies.'
    }, {
      name: 'onClick',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The function will be called when mouse click the pies.'
    },
  ],
  examples: [
    {
      name: 'Simple AreaChart',
      url: '/examples#areaChart',
    }
  ]
};
