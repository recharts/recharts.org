export default {
  name: 'Sector',
  examples: [],
  props: [
    {
      name: 'cx',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The x-coordinate of center.',
    }, {
      name: 'cy',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The y-coordinate of center.',
    }, {
      name: 'innerRadius',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The inner radius of the sector.',
    }, {
      name: 'outerRadius',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The outer radius of the sector.',
    }, {
      name: 'startAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The start angle of the sector.',
    }, {
      name: 'endAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The end angle of the sector.',
    }, {
      name: 'onMouseEnter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The function will be called when mouse enter the pies.'
    }, {
      name: 'onMouseLeave',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The function will be called when mouse leave the pies.'
    }, {
      name: 'onClick',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The function will be called when mouse click the pies.'
    },
  ],
};
