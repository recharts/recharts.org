export default {
  name: 'Cross',
  examples: [],
  props: [
    {
      name: 'x',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The x-coordinate of the vertical line of the cross.',
    }, {
      name: 'y',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The y-coordinate of the horizontal line of the cross.',
    }, {
      name: 'top',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The y-coordinate of the top left point in the boundary box of the cross.',
    }, {
      name: 'left',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The x-coordinate of the top left point in the boundary box of the cross.',
    }, {
      name: 'width',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The width of the horizontal line of the cross.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The height of the vertical line of the cross.',
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
