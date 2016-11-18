export default {
  name: 'ZAxis',
  examples: [],
  props: [
    {
      name: 'dataKey',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The key of data displayed in the axis.',
    }, {
      name: 'zAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The unique id of z-axis.',
    }, {
      name: 'range',
      type: 'Array',
      defaultVal: '[10, 10]',
      isOptional: false,
      desc: 'The range of axis.',
    }, {
      name: 'unit',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The unit of data displayed in the axis. This option will be used to represent an index unit in a scatter chart.',
    }, {
      name: 'name',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The name of data displayed in the axis. This option will be used to represent an index in a scatter chart.',
    }, {
      name: 'scale',
      type: `'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' |
        'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'utcTime' | 'sequential' |
        'threshold' | Function`,
      defaultVal: 'auto',
      isOptional: false,
      desc: `If 'auto' set, the scale funtion is linear scale.`,
      format: [
        '<ZAxis scale="log" />',
        `
import { scaleLog } from 'd3-scale';
const scale = scaleLog().base(Math.E);

...
  <ZAxis scale={scale} />
...
`
      ],
    },
  ],
};
