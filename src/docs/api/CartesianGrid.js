export default {
  name: 'CartesianGrid',
  props: [
    {
      name: 'x',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The x-coordinate of grid.',
        'zh-CN': 'x坐标'
      },
    }, {
      name: 'y',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The y-coordinate of grid.',
        'zh-CN': 'y坐标'
      },
    }, {
      name: 'width',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The width of grid.',
        'zh-CN': '宽度',
      },
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The height of grid.',
        'zh-CN': '高度',
      },
    }, {
      name: 'horizontal',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US': 'If set false, no horizontal grid lines will be drawn.',
        'zh-CN': '是否展示水平方向的网格线。',
      },
    }, {
      name: 'vertical',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US': 'If set false, no vertical grid lines will be drawn.',
        'zh-CN': '是否展示竖直方向的网格线。',
      },
    }, {
      name: 'horizontalPoints',
      type: 'Array',
      defaultVal: '[]',
      isOptional: false,
      desc: {
        'en-US': 'The y-coordinates of all horizontal lines.',
        'zh-CN': '所有水平网格线的y坐标。',
      },
    }, {
      name: 'verticalPoints',
      type: 'Array',
      defaultVal: '[]',
      isOptional: false,
      desc: {
        'en-US': 'The x-coordinates of all vertical lines.',
        'zh-CN': '所有竖直网格线的x坐标。',
      },
    },
  ],
};
