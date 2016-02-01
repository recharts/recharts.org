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
      desc: 'The angle of radial direction line to display axis text.',
    }, {
      name: 'orient',
      type: 'String',
      defaultVal: 'right',
      isOptional: false,
      desc: 'The orientation of axis text.',
    }, {
      name: 'axisLine',
      type: 'Bool | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If false set, axis line will not be drawed. If true set, axis line will be drawed which have the props calculated internally. If object set, axis line will be drawed which have the props mergered by the internal calculated props and the option.',
    }, {
      name: 'label',
      type: 'Bool | Object | Element',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If false set, labels will not be drawed. If true set, labels will be drawed which have the props calculated internally. If object set, labels will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom label element.',
    }, {
      name: 'tickFormatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The function to formatting tick.',
    },
  ],
  examples: [
  ],
};
