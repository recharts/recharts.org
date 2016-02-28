export default {
  name: 'CartesianGrid',
  examples: [],
  props: [
    {
      name: 'x',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The x-coordinate of grid.',
    }, {
      name: 'y',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The y-coordinate of grid.',
    }, {
      name: 'width',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The width of grid.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The height of grid.',
    }, {
      name: 'horizontal',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If set false, no horizontal grid lines will be drawed.',
    }, {
      name: 'vertical',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If set false, no vertical grid lines will be drawed.',
    }, {
      name: 'horizontalPoints',
      type: 'Array',
      defaultVal: '[]',
      isOptional: false,
      desc: 'The y-coordinates of all horizontal lines.',
    }, {
      name: 'verticalPoints',
      type: 'Array',
      defaultVal: '[]',
      isOptional: false,
      desc: 'The x-coordinates of all vertical lines.',
    },
  ],
};
