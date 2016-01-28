export default {
  name: 'Bar',
  props: [
    {
      name: 'layout',
      type: 'String',
      defaultVal: 'horizontal',
      isOptional: false,
      desc: 'The layout (horizontal or vertical) of area in the chart.',
    }, {
      name: 'dataKey',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The key of a group of data which should be unique in an area chart.',
    }, {
      name: 'xAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The id of x-axis which is corresponding to the data.',
    }, {
      name: 'yAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The id of y-axis which is corresponding to the data.',
    }, {
      name: 'stackId',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The stack id of bar, when two bars have the same value axis and same stackId, then the two bars are stacked in order.',
    }, {
      name: 'legendType',
      type: 'String',
      defaultVal: 'line',
      isOptional: false,
      desc: 'The type of icon in legend, which can be line, scatter, square, rect.',
    }, {
      name: 'formatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The formatter function of data.',
    }, {
      name: 'barSize',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The width or height of each bar. If the barSize is not specified, the size of bar will be caculated by the barCategoryGap, barGap and the quantity of bar groups.'
    }, {
      name: 'label',
      type: 'Boolean | Object | ReactElement',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, labels will not be drawed. If true set, labels will be drawed which have the props calculated internally. If object set, labels will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom label element.',
    }, {
      name: 'data',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The position information of all the rectangles.',
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
    }, {
      name: 'unit',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The unit of data.',
    }, {
      name: 'name',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The name of data.',
    },
  ],
  examples: [
    {
      name: 'Simple AreaChart',
      url: '/examples#areaChart',
    }
  ]
};
