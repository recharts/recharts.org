export default {
  name: 'PolarGrid',
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
      name: 'innerRadius',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The radius of the inner polar grid.',
    }, {
      name: 'outerRadius',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The radius of the outer polar grid.',
    }, {
      name: 'polarAngles',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The array of every line grid\'s angle.',
    }, {
      name: 'polarRadius',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The array of every circle grid\'s radius.',
    }, {
      name: 'gridCount',
      type: 'Number',
      defaultVal: '2',
      isOptional: false,
      desc: 'The count of polar grids.',
    }, {
      name: 'gridType',
      type: 'String',
      defaultVal: 'circle',
      isOptional: false,
      desc: 'The type of polar grids.',
    },
  ],
};
