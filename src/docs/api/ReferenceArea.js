export default {
  name: 'ReferenceArea',
  props: [
    {
      name: 'xAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The id of x-axis which is corresponding to the data.',
    }, {
      name: 'yAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The id of y-axis which is corresponding to the data.',
    }, {
      name: 'x1',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: true,
      desc: 'A boundary value of the area. If the specified x-axis is a number axis, the type of x must be Number. If the specified x-axis is a category axis, the value of x must be one of the categorys. If one of x1 or x2 is invalidate, the area will cover along x-axis.',
    }, {
      name: 'x2',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: true,
      desc: 'A boundary value of the area. If the specified x-axis is a number axis, the type of x must be Number. If the specified x-axis is a category axis, the value of x must be one of the categorys. If one of x1 or x2 is invalidate, the area will cover along x-axis.',
    }, {
      name: 'y1',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: true,
      desc: 'A boundary value of the area. If the specified y-axis is a number axis, the type of y must be Number. If the specified y-axis is a category axis, the value of y must be one of the categorys. If one of y1 or y2 is invalidate, the area will cover along y-axis.',
    }, {
      name: 'y2',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: true,
      desc: 'A boundary value of the area. If the specified y-axis is a number axis, the type of y must be Number. If the specified y-axis is a category axis, the value of y must be one of the categorys. If one of y1 or y2 is invalidate, the area will cover along y-axis.',
    }, {
      name: 'alwaysShow',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If the corresponding axis is a number axis and this option is set true, the value of reference line will be take into account when calculate the domain of corresponding axis, so that the reference line will always show.',
      examples: [{
        name: 'A LineChart with alwaysShow ReferenceLine',
        url: '//jsfiddle.net/9shwdgtq/'
      }],
    }, {
      name: 'viewBox',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The box of viewing area, which has the shape of {x: someVal, y: someVal, width: someVal, height: someVal}, usually calculated internally.',
    }, {
      name: 'xAxis',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The configuration of the corresponding x-axis, usually calculated internally.',
    }, {
      name: 'yAxis',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The configuration of the corresponding y-axis, usually calculated internally.',
    }, {
      name: 'label',
      type: 'String | Number | ReactElement | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set a string or a number, default label will be drawn, and the option is content. If set a React element, the option is the custom react element of drawing label. If set a function, the function will be called to render customized label.',
      format: [
        `<ReferenceArea x1="01" x2="08" label="MAX"/>`,
        `<ReferenceArea y1={100} y2={500} label={<CustomizedLabel />}/>`,
      ],
      examples: [{
        name: 'ReferenceLines with label',
        url: '/examples#LineChartWithReferenceLines',
      }]
    }, {
      name: 'isFront',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If set true, the line will be rendered in front of bars in BarChart, etc.'
    },
  ],
};
