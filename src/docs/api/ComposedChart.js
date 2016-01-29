export default {
  name: 'ComposedChart',
  desc: 'A composed chart of line, area, bar. When you just want to draw chart of single type like line, then LineChart is recommended.',
  props: [
    {
      name: 'layout',
      type: 'String',
      defaultVal: 'horizontal',
      isOptional: false,
      desc: 'The layout (horizontal or vertical) of area in the chart.',
    }, {
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
      desc: 'The width or height of each bar. If the barSize is not specified, the size of bar will be caculated by the barCategoryGap, barGap and the quantity of bar groups.',
    },
  ],
  examples: [
    {
      name: 'ComposedChart of a line, a bar and a area',
      url: '/examples/LineBarAreaComposedChart',
    },
    {
      name: 'Vertical ComposedChart',
      url: '/examples/LineBarAreaComposedChart',
    },
    {
      name: 'ComposedChart of a line and a bar which both display the same data',
      url: '/examples/SameDataComposedChart',
    },
  ]
};
