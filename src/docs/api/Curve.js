export default {
  name: 'Curve',
  examples: [],
  props: [
    {
      name: 'type',
      type: 'String',
      defaultVal: '\'linear\'',
      isOptional: false,
      desc: 'The interpolation type of area, which can be \'linear\', \'monotone\', \'step\', \'stepBefore\', \'stepAfter\'',
    }, {
      name: 'points',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The coordinates of all the points in the curve.',
    }, {
      name: 'baseLineType',
      type: 'String',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set a string value (horizontal, vertical or curve), the option is the type of baseline in an area.',
    }, {
      name: 'baseLine',
      type: 'Number | Array',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The value which can describle the line.',
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
