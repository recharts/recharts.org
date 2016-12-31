export default {
  name: 'ReferenceDot',
  props: [
    {
      name: 'xAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The id of x-axis which is corresponding to the data.',
        'zh-CN': '参考点对应的 x 轴的id。',
      },
    }, {
      name: 'yAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The id of y-axis which is corresponding to the data.',
        'zh-CN': '参考点对应的 y 轴的id。',
      },
    }, {
      name: 'x',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'If the x-axis specified by xAxisId is a number axis, the type of x must be Number. If the x-axis specified by xAxisId is a category axis, the value of x must be one of the categorys, otherwise no dot will be drawn.',
        'zh-CN': '用来描述 x 坐标的值，当 x 轴是数值类型的坐标轴时，这个值必须为数值类型。当 x 轴为类目轴时， 这个值必须为 x 轴 domain 中的一个元素。',
      },
    }, {
      name: 'y',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'If the y-axis specified by yAxisId is a number axis, the type of y must be Number. If the y-axis specified by yAxisId is a category axis, the value of y must be one of the categorys, otherwise no dot will be drawn.',
        'zh-CN': '用来描述 y 坐标的值，当 y 轴是数值类型的坐标轴时，这个值必须为数值类型。当 y 轴为类目轴时， 这个值必须为 y 轴 domain 中的一个元素。',
      },
    }, {
      name: 'alwaysShow',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US': 'If set true, the value of reference dot will be take into account when calculate the domain of corresponding axis, so that the reference dot will always show.',
        'zh-CN': '是否根据整参考点的值调整相应的坐标轴 domain，来保证参考点一定在可视区域内。'
      },
    }, {
      name: 'xAxis',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The configuration of the corresponding x-axis, usually calculated internally.',
        'zh-CN': 'x轴配置。',
      },
    }, {
      name: 'yAxis',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The configuration of the corresponding y-axis, usually calculated internally.',
        'zh-CN': 'y轴配置。',
      },
    }, {
      name: 'label',
      type: 'String | Number | ReactElement | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'If set a string or a number, default label will be drawn, and the option is content. If set a React element, the option is the custom react element of drawing label. If set a function, the function will be called to render customized label.',
        'zh-CN': '当值为简单类型的数值或者字符串时，这个值会被渲染成文字标签。当值为 React element，会克隆这个元素来渲染文字标签。',
      },
      format: [
        `<ReferenceDot x="a" y={400} label="MAX"/>`,
        `<ReferenceDot x="a" y={400} label={<CustomizedLabel />}/>`,
        `<ReferenceDot x="a" y={400} label={renderLabel}/>`,
      ],
    }, {
      name: 'isFront',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US': 'If set true, the dot will be rendered in front of bars in BarChart, etc.',
        'zh-CN': '是否展示在图表的最上层。',
      },
    },
  ],
};
