export default {
  name: 'Legend',
  props: [
    {
      name: 'width',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The width of legend.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: '40',
      isOptional: false,
      desc: 'The width of legend.',
    }, {
      name: 'layout',
      type: 'String',
      defaultVal: 'horizontal',
      isOptional: false,
      desc: 'The layout of legend items, which can be horizontal, vertical.',
    }, {
      name: 'align',
      type: 'String',
      defaultVal: 'center',
      isOptional: false,
      desc: 'The alignment of legend items when the layout is horizontal, which cen be left, center, right.',
    }, {
      name: 'verticalAlign',
      type: 'String',
      defaultVal: 'middle',
      isOptional: false,
      desc: 'The alignment of legend items when the layout is vertical, which can be top, middle, bottom.',
    }, {
      name: 'iconSize',
      type: 'Number',
      defaultVal: '14',
      isOptional: false,
      desc: 'The size of icon in each legend item.',
    }, {
      name: 'payload',
      type: 'Array',
      defaultVal: '[]',
      isOptional: false,
      desc: 'The source data of the content to be displayed in the legend, usually calculated internally.',
    }, {
      name: 'wrapperStyle',
      type: 'Object',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The style of legend container which is a ul element.',
    },
  ],
  examples: [
    {
      name: 'Simple AreaChart',
      url: '/examples#areaChart',
    }
  ]
};
