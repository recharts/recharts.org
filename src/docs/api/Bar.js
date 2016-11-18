export default {
  name: 'Bar',
  examples: [],
  props: [
    {
      name: 'layout',
      type: '\'horizontal\' , \'vertical\'',
      defaultVal: 'undefined',
      isOptional: true,
      desc: 'The layout of bar in the chart, usually inherited from parent.',
    }, {
      name: 'dataKey',
      type: 'String | Number',
      defaultVal: 'undefined',
      isOptional: false,
      desc: 'The key of a group of data which should be unique in an area chart.',
    }, {
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
      name: 'legendType',
      type: `'line' | 'square' | 'rect'| 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye'`,
      defaultVal: '\'rect\'',
      isOptional: false,
      desc: 'The type of icon in legend, which can be \'line\', \'scatter\', \'square\', \'rect\'.',
    }, {
      name: 'label',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, labels will not be drawn. If true set, labels will be drawn which have the props calculated internally. If object set, labels will be drawn which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom label element. If set a function, the function will be called to render customized label.',
      format: [
        `<Bar dataKey="value" label />`,
        `<Bar dataKey="value" label={{ fill: 'red', fontSize: 20 }} />`,
        `<Bar dataKey="value" label={<CustomizedLabel />} />`,
      ],
    }, {
      name: 'data',
      type: 'Array',
      defaultVal: 'undefined',
      isOptional: false,
      desc: 'The position information of all the rectangles, usually calculated internally.',
    }, {
      name: 'barSize',
      type: 'Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: 'The width or height of each bar. If the barSize is not specified, the size of bar will be caculated by the barCategoryGap, barGap and the quantity of bar groups.'
    }, {
      name: 'maxBarSize',
      type: 'Number',
      defaultVal: '',
      defaultVal: false,
      desc: 'The maximum width of bar in a horizontal BarChart, or maximum height in a vertical BarChart.'
    }, {
      name: 'minPointSize',
      type: 'Number',
      defaultVal: 0,
      isOptional: false,
      desc: `The minimal height of a bar in a horizontal BarChart, or the minimal width of a bar in a vertical BarChart.
      By default, 0 values are not shown. To visualize a 0 (or close to zero) point, set the minimal point size to a pixel
      value like 3. In stacked bar charts, minPointSize might not be respected for tightly packed values. So we strongly recommend not using this props in stacked BarChart.`,
      examples: [{
        name: 'A BarChart with non-zero minPointSize',
        url: 'examples/#BarChartWithMinHeight',
      }]
    }, {
      name: 'shape',
      type: 'ReactElement | Function',
      defaultVal: 'undefined',
      isOptional: true,
      desc: 'If set a ReactElement, the shape of bar can be customized. If set a function, the function will be called to render customized shape.',
      format: [
        `<Bar dataKey="value" shape={<CustomizedShape/>}/>`,
        `<Bar dataKey="value" shape={renderShape}/>`,
      ],
      examples: [{
        name: 'A bar chart with customized shape',
        url: 'examples#CustomShapeBarChart',
      }],
    }, {
      name: 'stackId',
      type: 'String | Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: 'The stack id of bar, when two bars have the same value axis and same stackId, then the two bars are stacked in order.',
      format: [
`<BarChart data={data} width={400} height={300}>
  <Bar stackId="pv" dataKey="pv01" />
  <Bar stackId="pv" dataKey="pv02" />
  <Bar stackId="uv" dataKey="uv01" />
  <Bar stackId="uv" dataKey="uv02" />
</BarChart>`
      ],
      examples: [{
        name: 'A stacked bar chart',
        url: '/examples#StackedBarChart',
      }, {
        name: 'A bar chart with stacked bars and unstacked bars',
        url: '/examples#MixBarChart',
      }],
    }, {
      name: 'unit',
      type: 'String | Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: 'The unit of data. This option will be used in tooltip.',
    }, {
      name: 'name',
      type: 'String | Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: 'The name of data. This option will be used in tooltip and legend to represent a bar. If no value was set to this option, the value of dataKey will be used alternatively.',
    }, {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true in CSR, and false in SSR',
      isOptional: false,
      desc: 'If set false, animation of bar will be disabled.',
    }, {
      name: 'animationBegin',
      type: 'Number',
      defaultVal: 0,
      isOptional: false,
      desc: 'Defines when the animation should begin.',
    }, {
      name: 'animationDuration',
      type: 'Number',
      defaultVal: 1500,
      isOptional: false,
      desc: 'Specifies the duration of animation, the unit of this option is ms.',
    }, {
      name: 'animationEasing',
      type: `'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'`,
      defaultVal: `'ease'`,
      isOptional: false,
      desc: 'The type of easing function.',
    }, {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of click on the bars in this group',
      examples: [{
        name: 'A BarChart with customized click event handler',
        url: '/examples#BarChartWithCustomizedEvent',
      }],
    }, {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mousedown on the bars in this group',
    }, {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseup on the bars in this group',
    }, {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mousemove on the bars in this group',
    }, {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseover on the bars in this group',
    }, {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseout on the bars in this group',
    }, {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of moustenter on the bars in this group',
    }, {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: 'The customized event handler of mouseleave on the bars in this group',
    },
  ],
};
