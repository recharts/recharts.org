export default {
  name: 'ScatterChart',
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
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 5, right: 5, bottom: 5, left: 5 }',
      isOptional: true,
      desc: {
        'en-US': 'The sizes of whitespace around the container.',
        'zh-CN': '图表四周的留白大小，支持传入部分值（ 如： { top: 5 }）',
      },
      format: ['{ top: 5, right: 5, bottom: 5, left: 5 }'],
    }, {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of click in this chart.',
    }, {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mousedown in this chart.',
    }, {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseup in this chart.',
    }, {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mousemove in this chart.',
    }, {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseover in this chart.',
    }, {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseout in this chart.',
    }, {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of moustenter in this chart.',
    }, {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseleave in this chart.',
    },
  ],
};
