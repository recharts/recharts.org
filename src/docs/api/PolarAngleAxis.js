export default {
  name: 'PolarAngleAxis',
  props: [
    {
      name: 'dataKey',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The key of a group of data which should be unique to show the meaning of angle axis.',
    }, {
      name: 'cx',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The x-coordinate of center.',
    }, {
      name: 'cy',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The y-coordinate of center.',
    }, {
      name: 'radius',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: '',
    }, {
      name: 'axisLine',
      type: 'Bool | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: '',
    }, {
      name: 'tickLine',
      type: 'Bool | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: '',
    }, {
      name: 'label',
      type: 'Bool | Object | Element',
      defaultVal: 'true',
      isOptional: false,
      desc: '',
    }, {
      name: 'ticks',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: '',
    }, {
      name: 'orient',
      type: 'String',
      defaultVal: 'outer',
      isOptional: false,
      desc: '',
    }, {
      name: 'axisLineType',
      type: 'String',
      defaultVal: 'circle',
      isOptional: false,
      desc: '',
    }, {
      name: 'tickFormatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: false,
      desc: '',
    },
  ],
  examples: [
  ],
};
