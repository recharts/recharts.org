export default {
  name: 'Dot',
  props: [
    {
      name: 'cx',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The x-coordinate of center.',
        'zh-CN': '圆心的 x 坐标。',
      },
    }, {
      name: 'cy',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The y-coordinate of center.',
        'zh-CN': '圆心的 y 坐标。',
      },
    }, {
      name: 'r',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The radius of dot.',
        'zh-CN': '半径。',
      },
    },
  ],
};
