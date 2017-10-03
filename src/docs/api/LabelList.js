export default {
  name: 'ErrorBar',
  props: [
    {
      name: 'dataKey',
      type: 'String | Number',
      isOptional: false,
      desc: {
        'en-US': `The key of a group of label values in data.`,
        'zh-CN': '展示 label 值对应的数据的 key。',
      },
    }, {
      name: 'data',
      type: 'Number',
      defaultVal: '5',
      isOptional: true,
      desc: {
        'en-US': 'The data input to the charts.',
        'zh-CN': '图表的输入数据',
      },
    }, {
      name: 'clockWise',
      type: 'String',
      defaultVal: '1.5',
      isOptional: true,
      desc: {
        'en-US': 'The parameter to calculate the view box of label in radial charts.',
        'zh-CN': '用于极坐标系图表中判断 label 可视区域的参数',
      },
    }, {
      name: 'valueAccessor',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The accessor function to get the value of each label.',
        'zh-CN': '获取label值的方法',
      },
    },
  ],
};
