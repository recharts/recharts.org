export default {
  name: 'Pie',
  props: [
    {
      name: 'cx',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The x-coordinate of center.',
    }, {
      name: 'cy',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The y-coordinate of center.',
    }, {
      name: 'innerRadius',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The inner radius of all the sectors.',
    }, {
      name: 'outerRadius',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The outer radius of all the sectors.',
    }, {
      name: 'startAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The start angle of first sector.',
    }, {
      name: 'clockWise',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: 'The direction of drawing sectors.',
    }, {
      name: 'minAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The minimum angle of each unzero data.',
    }, {
      name: 'nameKey',
      type: 'String',
      defaultVal: '\'name\'',
      isOptional: false,
      desc: "The key of each sector's name.",
    }, {
      name: 'valueKey',
      type: 'String',
      defaultVal: '\'value\'',
      isOptional: false,
      desc: "The key of each sector's value.",
    }, {
      name: 'legendType',
      type: 'String',
      defaultVal: '\'rect\'',
      isOptional: false,
      desc: 'The type of icon in legend, which can be \'line\', \'scatter\', \'square\', \'rect\'.',
    }, {
      name: 'label',
      type: 'Boolean | Object | ReactElement',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, labels will not be drawed. If true set, labels will be drawed which have the props calculated internally. If object set, labels will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom label element.',
    }, {
      name: 'data',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The source data which each element is an object.',
    },
  ],
  examples: [
    {
      name: 'Simple PieChart',
      url: '/examples#TwoSimplePieChart',
    },
    {
      name: 'PieChart of level datas',
      url: '/examples#TwoLevelPieChart',
    },
  ]
};
