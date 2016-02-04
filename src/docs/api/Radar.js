export default {
  name: 'Radar',
  props: [
    {
      name: 'dataKey',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The key of a group of data which should be unique in a radar chart.',
    }, {
      name: 'points',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The coordinates of all the vertexes of the radar shape, like { x, y }.',
    }, {
      name: 'shape',
      type: 'Element',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The custom shape element.',
    }, {
      name: 'dot',
      type: 'Bool | Object | Element',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If false set, dots will not be drawed. If true set, dots will be drawed which have the props calculated internally. If object set, dots will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom dot element.',
    }, {
      name: 'label',
      type: 'Bool | Object | Element',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If false set, labels will not be drawed. If true set, labels will be drawed which have the props calculated internally. If object set, labels will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom label element.',
    },
  ],
  examples: [
  ],
};
