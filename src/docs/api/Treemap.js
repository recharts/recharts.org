export default {
  name: 'Treemap',
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
      name: 'ratio',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The ratio of every single rectangle in the treemap.',
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 5, right: 5, bottom: 5, left: 5 }',
      isOptional: true,
      desc: 'The sizes of whitespace around the container.',
    },
  ],
  examples: [
    {
      name: 'Simple AreaChart',
      url: '/examples#areaChart',
    }
  ]
};
