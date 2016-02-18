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
      name: 'dataKey',
      type: 'String',
      defaultVal: '\'value\'',
      isOptional: false,
      desc: 'The key of a group of data which should be unique in a treemap.',
    }, {
      name: 'ratio',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The treemap will try to keep every single rectangle\'s aspect ratio near the ratio given.',
    },
  ],
  examples: [
    {
      name: 'Simple Treemap',
      url: '//jsfiddle.net/us0mcbyx/embedded/result/',
      code: `<Treemap
  width={400}
  height={200}
  data={data}
  dataKey="size"
  ratio={4/3}
  stroke="#fff"
  fill="#8884d8"
/>
`,
    },
  ]
};
