export default {
  name: 'PolarRadiusAxis',
  props: [
    {
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
      name: 'angle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: '',
    }, {
      name: 'orient',
      type: 'String',
      defaultVal: 'right',
      isOptional: false,
      desc: '',
    }, {
      name: 'axisLine',
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
