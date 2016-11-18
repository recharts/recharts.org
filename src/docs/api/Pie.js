export default {
  name: 'Pie',
  examples: [],
  props: [
    {
      name: 'cx',
      type: 'Percentage | Number',
      defaultVal: '\'50%\'',
      isOptional: false,
      desc: 'The x-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of container height.',
    }, {
      name: 'cy',
      type: 'Percentage | Number',
      defaultVal: '\'50%\'',
      isOptional: false,
      desc: 'The y-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of container height.',
    }, {
      name: 'innerRadius',
      type: 'Percentage | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The inner radius of all the sectors. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
    }, {
      name: 'outerRadius',
      type: 'Percentage | Number',
      defaultVal: '\'80%\'',
      isOptional: false,
      desc: 'The outer radius of all the sectors. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
    }, {
      name: 'startAngle',
      type: 'Number',
      defaultVal: 0,
      isOptional: false,
      desc: 'The start angle of first sector.',
    }, {
      name: 'endAngle',
      type: 'Number',
      defaultVal: 360,
      isOptional: false,
      desc: 'The end angle of last sector, which should be unequal to startAngle.',
    }, {
      name: 'minAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The minimum angle of each unzero data.',
    }, {
      name: 'paddingAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The angle between two sectors.',
      examples: [{
        name: 'Pie with nozero padding angle',
        url: 'examples#PieChartWithPaddingAngle',
      }]
    }, {
      name: 'nameKey',
      type: 'String',
      defaultVal: '\'name\'',
      isOptional: false,
      desc: "The key of each sector's name.",
    }, {
      name: 'valueKey',
      type: 'String',
      defaultVal: '\'value\'',
      isOptional: false,
      desc: "The key of each sector's value.",
    }, {
      name: 'legendType',
      type: `'line' | 'square' | 'rect'| 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye'`,
      defaultVal: '\'rect\'',
      isOptional: false,
      desc: 'The type of icon in legend, which can be \'line\', \'scatter\', \'square\', \'rect\'.',
    }, {
      name: 'label',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, labels will not be drawn. If true set, labels will be drawn which have the props calculated internally. If object set, labels will be drawn which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom label element. If set a function, the function will be called to render customized label.',
      examples: [{
        name: 'A pie chart with customized label',
        url: 'examples#PieChartWithCustomizedLabel',
      }],
    }, {
      name: 'labelLine',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, label lines will not be drawn. If true set, label lines will be drawn which have the props calculated internally. If object set, label lines will be drawn which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom label line element. If set a function, the function will be called to render customized label line.',
      examples: [{
        name: 'A pie chart with customized label',
        url: 'examples#PieChartWithCustomizedLabel',
      }],
    }, {
      name: 'data',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The source data which each element is an object.',
    }, {
      name: 'activeIndex',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The index of active sector in Pie, this option can be changed in mouse event handlers.',
      examples: [{
        name: 'A pie chart with customized active shape',
        url: 'examples#CustomActiveShapePieChart',
      }],
    }, {
      name: 'activeShape',
      type: 'Object | ReactElement | Function',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The shape of active sector.',
      examples: [{
        name: 'A pie chart with customized active shape',
        url: 'examples#CustomActiveShapePieChart',
      }],
    }, {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true in CSR, and false in SSR',
      isOptional: false,
      desc: 'If set false, animation of line will be disabled.',
    }, {
      name: 'animationBegin',
      type: 'Number',
      defaultVal: '400',
      isOptional: false,
      desc: 'Defines when the animation should begin.',
    }, {
      name: 'animationDuration',
      type: 'Number',
      defaultVal: '1500',
      isOptional: false,
      desc: 'Specifies the duration of animation, the unit of this option is ms.',
    }, {
      name: 'animationEasing',
      type: `'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear' | Function`,
      defaultVal: `'ease'`,
      isOptional: false,
      desc: 'The type of easing function or a customized ease function.',
    }, {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of click on the sectors in this group',
    }, {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mousedown on the sectors in this group',
    }, {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseup on the sectors in this group',
    }, {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mousemove on the sectors in this group',
    }, {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseover on the sectors in this group',
    }, {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseout on the sectors in this group',
    }, {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of moustenter on the sectors in this group',
    }, {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseleave on the sectors in this group',
    },
  ],
};
