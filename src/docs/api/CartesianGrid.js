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
        'zh-CN': 'x 坐标。',
      },
    },
    {
      name: 'y',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The y-coordinate of grid.',
        'zh-CN': 'y 坐标。',
      },
    },
    {
      name: 'width',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The width of grid.',
        'zh-CN': '宽度。',
      },
    },
    {
      name: 'height',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The height of grid.',
        'zh-CN': '高度。',
      },
    },
    {
      name: 'horizontal',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US': 'If set false, no horizontal grid lines will be drawn.',
        'zh-CN': '是否展示水平方向的网格线。',
      },
    },
    {
      name: 'vertical',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US': 'If set false, no vertical grid lines will be drawn.',
        'zh-CN': '是否展示竖直方向的网格线。',
      },
    },
    {
      name: 'horizontalPoints',
      type: 'Array',
      defaultVal: '[]',
      isOptional: false,
      desc: {
        'en-US': 'The y-coordinates of all horizontal lines.',
        'zh-CN': '所有水平网格线的 y 坐标。',
      },
    },
    {
      name: 'horizontalCoordinatesGenerator',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'A function that generates the y-coordinates of all horizontal lines. The generator gets passed an object of the shape { yAxis, width, height, offset }.',
        'zh-CN': '生成所有水平线的 y 坐标的函数。生成器传递一个形状为 { yAxis, width, height, offset } 的对象。',
      },
      format: [
        '<CartesianGrid strokeDasharray="3 3" horizontalCoordinatesGenerator={(props) => props.height > 250 ? [75, 150, 225] : [100, 200]} />',
      ],
      examples: [
        {
          name: 'Cartesian grid with coordinate generators',
          url: 'https://codesandbox.io/s/cartesian-grid-with-coordinate-generators-my38cg',
          isExternal: true,
        },
      ],
    },
    {
      name: 'verticalPoints',
      type: 'Array',
      defaultVal: '[]',
      isOptional: false,
      desc: {
        'en-US': 'The x-coordinates of all vertical lines.',
        'zh-CN': '所有竖直网格线的 x 坐标。',
      },
    },
    {
      name: 'verticalCoordinatesGenerator',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'A function that generates the x-coordinates of all vertical lines. The generator gets passed an object of the shape { xAxis, width, height, offset }.',
        'zh-CN': '生成所有垂直线的 x 坐标的函数。生成器传递一个形状为 { xAxis, width, height, offset } 的对象',
      },
      format: [
        '<CartesianGrid strokeDasharray="3 3" verticalCoordinatesGenerator={(props) => props.width > 450 ? [150, 300, 450] : [200, 400]} />',
      ],
      examples: [
        {
          name: 'Cartesian grid with coordinate generators',
          url: 'https://codesandbox.io/s/cartesian-grid-with-coordinate-generators-my38cg',
          isExternal: true,
        },
      ],
    },
    {
      name: 'strokeDasharray',
      type: 'String',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The pattern of dashes and gaps used to paint the lines of the grid',
        'zh-CN': 'The pattern of dashes and gaps used to paint the lines of the grid',
      },
      format: [
        '<CartesianGrid strokeDasharray="4" />',
        '<CartesianGrid strokeDasharray="4 1" />',
        '<CartesianGrid strokeDasharray="4 1 2" />',
      ],
    },
  ],
  parentComponents: ['AreaChart', 'BarChart', 'LineChart', 'ComposedChart', 'ScatterChart'],
};
