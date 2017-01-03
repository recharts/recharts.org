export default {
  name: 'RadarChart',
  props: [
    {
      name: 'width',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The width of chart container.',
        'zh-CN': '图表的宽度。',
      },
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The height of chart container.',
        'zh-CN': '图表的高度。',
      },
    }, {
      name: 'cx',
      type: 'Percentage | Number',
      defaultVal: '\'50%\'',
      isOptional: false,
      desc: {
        'en-US': 'The x-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of width.',
        'zh-CN': '圆心的 x 坐标，如果值为百分比，会根据图表的宽度来计算最后的值。'
      },
    }, {
      name: 'cy',
      type: 'Percentage | Number',
      defaultVal: '\'50%\'',
      isOptional: false,
      desc: {
        'en-US': 'The y-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of height.',
        'zh-CN': '圆心的 y 坐标，如果值为百分比，会根据图表的高度来计算最后的值。',
      },
    }, {
      name: 'startAngle',
      type: 'Number',
      defaultVal: '90',
      isOptional: false,
      desc: {
        'en-US': 'The angle of first radial direction line.',
        'zh-CN': '起始刻度的角度，默认为 90 度，即圆心的正上方。0 度为圆心的正右方。',
      },
    }, {
      name: 'innerRadius',
      type: 'Percentage | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The inner radius of first circle grid. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
        'zh-CN': '雷达图最内侧网格的半径，一般为 0。如果值为百分比，我们首先会根据圆心的坐标、图表的宽度、图表的高度计算一个最大半径，然后根据这个最大半径来计算真实的半径。',
      },
    }, {
      name: 'outerRadius',
      type: 'Percentage | Number',
      defaultVal: '\'80%\'',
      isOptional: false,
      desc: {
        'en-US': 'The outer radius of last circle grid. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
        'zh-CN': '雷达图最外侧网格的半径，一般为 0。如果值为百分比，我们首先会根据圆心的坐标、图表的宽度、图表的高度计算一个最大半径，然后根据这个最大半径来计算真实的半径。',
      },
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 0, right: 0, bottom: 0, left: 0 }',
      isOptional: false,
      desc: {
        'en-US': 'The sizes of whitespace around the container.',
        'zh-CN': '图表四周的留白大小，支持传入部分值（如： { top: 5 }）',
      },
      format: ['{ top: 5, right: 5, bottom: 5, left: 5 }'],
    }, {
      name: 'clockWise',
      type: 'Bool',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US': 'The direction of clockwise.',
        'zh-CN': '是否顺时针',
      },
    }, {
      name: 'onMouseEnter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': `The function will be called when mouse enter the 'Radar'.`,
        'zh-CN': '雷达图 mouseenter 事件的回调函数。',
      },
    }, {
      name: 'onMouseLeave',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': `The function will be called when mouse leave the 'Radar'.`,
        'zh-CN': '雷达图 mouseleave 事件的回调函数。',
      },
    }, {
      name: 'onClick',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': `The function will be called when click the 'Radar'.`,
        'zh-CN': '雷达图 click 事件的回调函数。',
      },
    },
  ],
};
