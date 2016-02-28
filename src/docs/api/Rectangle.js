export default {
  name: 'Rectangle',
  examples: [],
  props: [
    {
      name: 'x',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The x-coordinate of top left point of the rectangle.',
    }, {
      name: 'y',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The y-coordinate of top left point of the rectangle.',
    }, {
      name: 'width',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The width of rectangle.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The height of rectangle.',
    }, {
      name: 'radius',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'If set a value, the option is the radius of all the rounderd corners. If set a array, the option are in turn the radiuses of top-left corner, top-right corner, bottom-right corner, bottom-left corner.',
    }, {
      name: 'onMouseEnter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The function will be called when mouse enter the area.'
    }, {
      name: 'onMouseLeave',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The function will be called when mouse leave the area.'
    }, {
      name: 'onClick',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The function will be called when mouse click the area.'
    },
  ],
};
