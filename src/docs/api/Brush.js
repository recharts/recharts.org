export default {
  name: 'Brush',
  examples: [],
  props: [
    {
      name: 'x',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The x-coordinate of brush.',
    }, {
      name: 'y',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The y-coordinate of brush.',
    }, {
      name: 'width',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The width of brush.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: '40',
      isOptional: false,
      desc: 'The height of brush.',
    }, {
      name: 'data',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The set of all values.',
    }, {
      name: 'travellerWidth',
      type: 'Number',
      defaultVal: '5',
      isOptional: false,
      desc: 'The width of each traveller.',
    }, {
      name: 'defaultStartIndex',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The default start index of brush. If the option is not setted, the start index will be 0.',
    }, {
      name: 'defaultEndIndex',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The default end index of brush. If the option is not setted, the end index will be calculated by the length of data.',
    }, {
      name: 'onChange',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The handler of changing the active scope of brush.',
    }
  ],
};
