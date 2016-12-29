export default {
  name: 'ResponsiveContainer',
  desc: 'A container component to make charts adapt to the size of parent container. The props width and height should be a percentage string.',
  props: [
    {
      name: 'aspect',
      type: ' Number',
      defaultVal: 'null',
      isOptional: true,
      desc: `width / height. If specified, the height will be calculated by width / aspect.`,
    },
    {
      name: 'width',
      type: 'Percentage | Number',
      defaultVal: '\'100%\'',
      isOptional: false,
      desc: 'The percentage value of the chart\'s width or a fixed width.',
    }, {
      name: 'height',
      type: 'Percentage | Number',
      defaultVal: '\'100%\'',
      isOptional: false,
      desc: 'The percentage value of the chart\'s width or a fixed height.',
    }, {
      name: 'minWidth',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The minimum width of the container.',
    }, {
      name: 'minHeight',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The minimum height of the container.',
    }, {
      name: 'debounce',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'If specified a positive number, debounced function will be used to handle the resize event.',
    },
  ],
};
