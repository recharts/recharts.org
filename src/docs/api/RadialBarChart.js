export default {
  name: 'RadialBarChart',
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
      name: 'data',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The source data which each element is an object.',
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 5, right: 5, bottom: 5, left: 5 }',
      isOptional: true,
      desc: 'The sizes of whitespace around the container.',
    }, {
      name: 'barCategoryGap',
      type: 'Percent String| Number',
      defaultVal: '10%',
      isOptional: false,
      desc: 'The gab betwwen two bar categorys which can be percent value and a fixed value.',
    }, {
      name: 'barGap',
      type: 'Number',
      defaultVal: 4,
      isOptional: false,
      desc: 'The gab betwwen two bar in the same category.',
    }, {
      name: 'barSize',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The width or height of each bar. If the barSize is not specified, the size of bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.',
    }, {
      name: 'cx',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The x-coordinate of center. If the cx is not specified, the center will be calculated by the half size of width',
    }, {
      name: 'cy',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The y-coordinate of center. If the cy is not specified, the center will be calculated by the half size of height',
    }, {
      name: 'innerRadius',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The innerRadius of the radial bar which is most close to the center.',
    }, {
      name: 'outerRadius',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The outerRadius of the radial bar which is most far away from the center.',
    },
  ],
  examples: [
    {
      name: 'Simple AreaChart',
      url: '/examples#areaChart',
    }
  ]
};
