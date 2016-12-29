export default {
  name: 'RadarChart',
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
      desc: 'The sizes of whitespace around the container.',
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
      desc: `The function will be called when mouse enter the 'Radar'.`
    }, {
      name: 'onMouseLeave',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: `The function will be called when mouse leave the 'Radar'.`
    }, {
      name: 'onClick',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: `The function will be called when click the 'Radar'.`
    },
  ],
};
