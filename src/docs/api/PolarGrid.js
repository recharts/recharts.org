export default {
  name: 'PolarGrid',
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
      name: 'innerRadius',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: '',
    }, {
      name: 'outerRadius',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: '',
    }, {
      name: 'gridCount',
      type: 'Number',
      defaultVal: '2',
      isOptional: false,
      desc: '',
    }, {
      name: 'polarAngles',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: '',
    }, {
      name: 'polarRadius',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: '',
    }, {
      name: 'gridType',
      type: 'String',
      defaultVal: 'circle',
      isOptional: false,
      desc: '',
    },
  ],
  examples: [
  ],
};
