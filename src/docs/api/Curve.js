export default {
  name: 'Curve',
  examples: [],
  props: [
    {
      name: 'type',
      type: `'basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter'`,
      defaultVal: '\'linear\'',
      isOptional: false,
      desc: 'The interpolation type of curve.',
    }, {
      name: 'points',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The coordinates of all the points in the curve.',
    }, {
      name: 'layout',
      type: `'horizontal', 'vertical'`,
      defaultVal: 'null',
      isOptional: true,
      desc: `The option can effect the interpolation algorithm when the props type is set to be 'monotone'. Meanwhile, this option will specified the type of baseline when the curve is colsed.`,
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
