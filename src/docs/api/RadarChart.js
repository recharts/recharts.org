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
        'zh-CN': '图表的宽度',
      },
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The height of chart container.',
        'zh-CN': '图表的高度',
      },
    }, {
      name: 'cx',
      type: 'Percentage | Number',
      defaultVal: '\'50%\'',
      isOptional: false,
      desc: 'The x-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of width.',
    }, {
      name: 'cy',
      type: 'Percentage | Number',
      defaultVal: '\'50%\'',
      isOptional: false,
      desc: 'The y-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of height.',
    }, {
      name: 'startAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The angle of first radial direction line.',
    }, {
      name: 'innerRadius',
      type: 'Percentage | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The inner radius of first circle grid. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
    }, {
      name: 'outerRadius',
      type: 'Percentage | Number',
      defaultVal: '\'80%\'',
      isOptional: false,
      desc: 'The outer radius of last circle grid. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 0, right: 0, bottom: 0, left: 0 }',
      isOptional: false,
      desc: {
        'en-US': 'The sizes of whitespace around the container.',
        'zh-CN': '图表四周的留白大小，支持传入部分值（ 如： { top: 5 }）',
      },
      format: ['{ top: 5, right: 5, bottom: 5, left: 5 }'],
    }, {
      name: 'clockWise',
      type: 'Bool',
      defaultVal: 'true',
      isOptional: false,
      desc: 'The direction of clockwise.',
    }, {
      name: 'onMouseEnter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': `The function will be called when mouse enter the 'Radar'.`,
        'zh-CN': '“雷达” mouseenter 事件的回调函数。',
      },
    }, {
      name: 'onMouseLeave',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': `The function will be called when mouse leave the 'Radar'.`,
        'zh-CN': '“雷达” mouseleave 事件的回调函数。',
      },
    }, {
      name: 'onClick',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': `The function will be called when click the 'Radar'.`,
        'zh-CN': '“雷达” click 事件的回调函数。',
      },
    },
  ],
};
