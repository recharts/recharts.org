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
      desc: 'The treemap will try to keep every single rectangle\'s aspect ratio near the ratio given.',
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
      name: 'Simple Treemap',
      url: '/examples/SimpleTreemap',
    },
    {
      name: 'Treemap with customized content',
      url: '/examples/CustomContentTreemap',
    },
  ]
};
