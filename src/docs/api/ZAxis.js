export default {
  name: 'ZAxis',
  examples: [],
  props: [
    {
      name: 'dataKey',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The key of data displayed in the axis.',
    }, {
      name: 'zAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The unique id of z-axis.',
    }, {
      name: 'range',
      type: 'Array',
      defaultVal: '[10, 10]',
      isOptional: false,
      desc: 'The range of axis.',
    }, {
      name: 'unit',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The unit of data displayed in the axis.',
    }, {
      name: 'name',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The name of data displayed in the axis.',
    },
  ],
};
