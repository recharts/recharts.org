export default {
  name: 'ScatterChart',
  props: [
    {
      name: 'width',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The width of chart container.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The width of chart container.',
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 5, right: 5, bottom: 5, left: 5 }',
      isOptional: true,
      desc: 'The sizes of whitespace around the container.',
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
