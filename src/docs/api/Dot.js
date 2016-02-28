export default {
  name: 'Dot',
  examples: [],
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
      name: 'r',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The radius of dot.',
    },
  ],
};
