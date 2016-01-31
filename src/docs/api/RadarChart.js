export default {
  name: 'RadarChart',
  props: [
    {
      name: 'width',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The width of chart container.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The width of chart container.',
    }, {
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
      name: 'startAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: '',
    }, {
      name: 'innerRadius',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: '',
    }, {
      name: 'outerRadius',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: '',
    }, {
      name: 'clockWise',
      type: 'Bool',
      defaultVal: 'true',
      isOptional: false,
      desc: '',
    },
  ],
  examples: [
  ],
};
