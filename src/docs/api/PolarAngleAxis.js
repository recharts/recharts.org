export default {
  name: 'PolarAngleAxis',
  examples: [],
  props: [
    {
      name: 'dataKey',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The key of a group of data which should be unique to show the meaning of angle axis.',
    }, {
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
      name: 'radius',
      type: 'Percentage | Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The outer radius of circle grid. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
    }, {
      name: 'axisLine',
      type: 'Bool | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If false set, axis line will not be drawed. If true set, axis line will be drawed which have the props calculated internally. If object set, axis line will be drawed which have the props mergered by the internal calculated props and the option.',
    }, {
      name: 'axisLineType',
      type: 'String',
      defaultVal: 'circle',
      isOptional: false,
      desc: 'The type of axis line.',
    }, {
      name: 'tickLine',
      type: 'Bool | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If false set, tick lines will not be drawed. If true set, tick lines will be drawed which have the props calculated internally. If object set, tick lines will be drawed which have the props mergered by the internal calculated props and the option.',
    }, {
      name: 'tick',
      type: 'Bool | Object | ReactElement | Function',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If false set, ticks will not be drawed. If true set, ticks will be drawed which have the props calculated internally. If object set, ticks will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom tick element. If set a function, the function will be called to render customized ticks.',
    }, {
      name: 'ticks',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The array of every tick\'s value and radius.',
    }, {
      name: 'orient',
      type: 'String',
      defaultVal: 'outer',
      isOptional: false,
      desc: 'The orientation of axis text.',
    }, {
      name: 'tickFormatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The function to formatting tick.',
    },
  ],
};
