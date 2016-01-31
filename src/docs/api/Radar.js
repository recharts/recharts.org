export default {
  name: 'Radar',
  props: [
    {
      name: 'dataKey',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: false,
      desc: '',
    }, {
      name: 'points',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: '',
    }, {
      name: 'shape',
      type: 'Element',
      defaultVal: 'null',
      isOptional: false,
      desc: '',
    }, {
      name: 'dot',
      type: 'Bool | Object | Element',
      defaultVal: 'true',
      isOptional: false,
      desc: '',
    }, {
      name: 'label',
      type: 'Bool | Object | Element',
      defaultVal: 'true',
      isOptional: false,
      desc: '',
    },
  ],
  examples: [
  ],
};
