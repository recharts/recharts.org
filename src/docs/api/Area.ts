export default {
  name: 'Area',
  props: [
    {
      name: 'type',
      type: `'basis' | 'basisClosed' | 'basisOpen' | 'bumpX' | 'bumpY' | 'bump' | 'linear' | 'linearClosed' | 'natural' |
      'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | Function`,
      defaultVal: "'linear'",
      isOptional: false,
      desc: {
        'en-US': 'The interpolation type of area. And customized interpolation function can be set to type.',
        'zh-CN': '曲线的插值类型，可以接收自定义的函数。折线对应的 type 为 "linear"。',
      },
      examples: [
        {
          name: 'd3-shape interpolation',
          url: 'https://github.com/d3/d3-shape#curves',
          isExternal: true,
        },
        {
          name: 'An AreaChart which has two area with different interpolation.',
          url: '/examples/CardinalAreaChart',
        },
      ],
    },
    {
      name: 'dataKey',
      type: 'String | Number | Function',
      defaultVal: 'undefined',
      isOptional: false,
      desc: {
        'en-US': 'The key of a group of data which should be unique in an area chart.',
        'zh-CN': '每个区域图对应一个唯一的 key，需要在 AreaChart 中保证唯一。',
      },
    },
    {
      name: 'xAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The id of x-axis which is corresponding to the data.',
        'zh-CN': '区域图对应的 x 轴的 id 。',
      },
    },
    {
      name: 'yAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The id of y-axis which is corresponding to the data.',
        'zh-CN': '区域图对应的 y 轴的 id 。',
      },
    },
    {
      name: 'legendType',
      type: "'line' | 'plainline' | 'square' | 'rect'| 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none'",
      defaultVal: "'line'",
      isOptional: true,
      desc: {
        'en-US': "The type of icon in legend.  If set to 'none', no legend item will be rendered.",
        'zh-CN': '对应的图例 icon 的类型。',
      },
    },
    {
      name: 'dot',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US':
          'If false set, dots will not be drawn. If true set, dots will be drawn which have the props calculated internally. If object set, dots will be drawn which have the props merged by the internal calculated props and the option. If ReactElement set, the option can be the custom dot element. If set a function, the function will be called to render customized dot.',
        'zh-CN':
          '曲线上的点，接收多种配置。当值为 false ，不渲染点。当值为 true ，点会继承 Area 的属性配置，例如配置了 Area 的 stroke 为 "red"， 点会继承这个属性。当值为一个对象的时候，会把这个对象解析为点的属性，来覆盖默认属性。当值是一个 React Element ，会克隆这个 React Element 来渲染“点”。当值是函数时，会调用这个函数去渲染自定义的“点”。',
      },
      format: [
        '<Area dataKey="value" dot={false} />',
        '<Area dataKey="value" dot={{ stroke: \'red\', strokeWidth: 2 }} />',
        '<Area dataKey="value" dot={<CustomizedDot />} />',
        '<Area dataKey="value" dot={renderDot}/>',
      ],
    },
    {
      name: 'activeDot',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US':
          'The dot is shown when user enter an area chart and this chart has tooltip. If false set, no active dot will not be drawn. If true set, active dot will be drawn which have the props calculated internally. If object set, active dot will be drawn which have the props merged by the internal calculated props and the option. If ReactElement set, the option can be the custom active dot element.If set a function, the function will be called to render customized active dot.',
        'zh-CN':
          '当图表触发 mouseenter 事件，并且需要展示 Tooltip 的时候，会展示一个“激活状态的点”。当值为 false ，不渲染“激活状态的点”。当值为 true ，点会继承 Area 的属性配置，例如配置了 Area 的 stroke 为 "red"， 点会继承这个属性。当值为一个对象的时候，会把这个对象解析为点的属性，来覆盖默认属性。当值是一个 React Element ，会克隆这个 React Element 来渲染“点”。当值是一个 函数 时，会调用这个函数去渲染自定义的“点”。',
      },
      format: [
        '<Area dataKey="value" activeDot={false} />',
        '<Area dataKey="value" activeDot={{ stroke: \'red\', strokeWidth: 2, r: 10 }} />',
        '<Area dataKey="value" activeDot={<CustomizedActiveDot />} />',
        '<Area dataKey="value" activeDot={renderDot} />',
      ],
    },
    {
      name: 'label',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US':
          'If false set, labels will not be drawn. If true set, labels will be drawn which have the props calculated internally. If object set, labels will be drawn which have the props merged by the internal calculated props and the option. If ReactElement set, the option can be the custom label element. If set a function, the function will be called to render customized label.',
        'zh-CN':
          '图形上的文本标签。当值为 false ，不展示文本标签。当值为 true，会根据 Area 的属性配置来展示文本标签。当值为对象的时候，会把这个对象解析为文本标签的属性，来覆盖默认属性。当值是一个 React Element ，会克隆这个 React Element 来渲染“文本标签”。当值是一个 函数 时，会调用这个函数去渲染自定义的“文本标签”。',
      },
      format: [
        '<Area dataKey="value" label />',
        '<Area dataKey="value" label={{ fill: \'red\', fontSize: 20 }} />',
        '<Area dataKey="value" label={<CustomizedLabel />} />',
        '<Area dataKey="value" label={renderLabel} />',
      ],
    },
    {
      name: 'stroke',
      type: 'String',
      defaultVal: '#3182bd',
      isOptional: false,
      desc: {
        'en-US': 'The stroke color. If "none", no line will be drawn.',
        'zh-CN': '描边的颜色。当值为"none"时，不描边',
      },
    },
    {
      name: 'strokeWidth',
      type: 'String | Number',
      defaultVal: '1',
      isOptional: true,
      desc: {
        'en-US': 'The width of the stroke',
        'zh-CN': '虚线的宽度',
      },
    },
    {
      name: 'layout',
      type: "'horizontal' | 'vertical'",
      defaultVal: 'undefined',
      isOptional: true,
      desc: {
        'en-US': 'The layout of area, usually inherited from parent.',
        'zh-CN': '布局类型，通常继承父组件的布局类型。',
      },
    },
    {
      name: 'baseLine',
      type: 'Number | Array',
      defaultVal: 'undefined',
      isOptional: false,
      desc: {
        'en-US': 'The value which can describle the line, usually calculated internally.',
        'zh-CN': `基准线，可以是一个数值，这种情况会根据 layout 解析成 x = \${baseLine} 或者 y = \${baseLine}。当使用 AreaChart
           或者 ComposedChart 作为父组件的时候，不需要自己计算，父组件会计算好。`,
      },
      format: ['<Area dataKey="value" baseLine={8} />', '<Area dataKey="value" baseLine={[{ x: 12, y: 15 }]} />'],
    },
    {
      name: 'points',
      type: 'Array',
      defaultVal: 'undefined',
      isOptional: false,
      desc: {
        'en-US': 'The coordinates of all the points in the area, usually calculated internally.',
        'zh-CN':
          '曲线上点的坐标。当使用 AreaChart 或者 ComposedChart 作为父组件的时候，不需要自己计算，父组件会计算好。',
      },
      format: ['[{ x: 12, y: 12, value: 240 }]'],
    },
    {
      name: 'stackId',
      type: 'String | Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: {
        'en-US':
          'The stack id of area, when two areas have the same value axis and same stackId, then the two areas area stacked in order.',
        'zh-CN': '堆积id，当两组及以上的区域图有相同的数值轴以及相同的 stackId 时，这些区域图会按照顺序堆积展示。',
      },
      format: [
        `
<AreaChart data={data} width={400} height={300}>
  <Area stackId="pv" dataKey="pv01" />
  <Area stackId="pv" dataKey="pv02" />
  <Area stackId="uv" dataKey="uv01" />
  <Area stackId="uv" dataKey="uv02" />
</AreaChart>
`,
      ],
      examples: [
        {
          name: 'A stacked area chart',
          url: '/examples/StackedAreaChart',
        },
      ],
    },
    {
      name: 'connectNulls',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US': 'Whether to connect a graph area across null points.',
        'zh-CN': '当遇到 null、undefined 等非法输入的时候，是否跳过这个值，让前后连接起来。',
      },
      examples: [
        {
          name: 'An areaChart connect nulls and an areaChart disconnect nulls',
          url: '/examples/AreaChartConnectNulls',
        },
      ],
    },
    {
      name: 'unit',
      type: 'String | Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: {
        'en-US': 'The unit of data. This option will be used in tooltip.',
        'zh-CN': '对应数据的单位，这个单位会展示在 Tooltip 的数值后面。',
      },
    },
    {
      name: 'name',
      type: 'String | Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: {
        'en-US':
          'The name of data. This option will be used in tooltip and legend to represent a area. If no value was set to this option, the value of dataKey will be used alternatively.',
        'zh-CN':
          '对应数据的名称，这个名称会展示在 Tooltip 以及 Legend 中用来表示这个区域图。如果名称为空，我们会使用 dataKey 替代。',
      },
    },
    {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true in CSR, and false in SSR',
      isOptional: false,
      desc: {
        'en-US': 'If set false, animation of area will be disabled.',
        'zh-CN': '当值为 false，不开启动画。',
      },
    },
    {
      name: 'animationBegin',
      type: 'Number',
      defaultVal: 0,
      isOptional: false,
      desc: {
        'en-US': 'Specifies when the animation should begin, the unit of this option is ms.',
        'zh-CN': '声明组件挂载或更新后，开始运行动画的间隔时长，单位为毫秒。',
      },
    },
    {
      name: 'animationDuration',
      type: 'Number',
      defaultVal: 1500,
      isOptional: false,
      desc: {
        'en-US': 'Specifies the duration of animation, the unit of this option is ms.',
        'zh-CN': '声明动画的运行时长，单位为毫秒。',
      },
    },
    {
      name: 'animationEasing',
      type: "'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'",
      defaultVal: "'ease'",
      isOptional: false,
      desc: {
        'en-US': 'The type of easing function.',
        'zh-CN': '动画缓动函数的类型。',
      },
    },
    {
      name: 'id',
      type: 'String',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'The unique id of this component, which will be used to generate unique clip path id internally. This props is suggested to be set in SSR.',
        'zh-CN': '唯一的id，会用于生成内部的clip path id 等，建议使用SSR的时候设置这个属性。',
      },
    },
    {
      name: 'onAnimationStart',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of animation start',
        'zh-CN': '区域图动画 start 事件的回调函数。',
      },
    },
    {
      name: 'onAnimationEnd',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of animation end',
        'zh-CN': '区域图动画 end 事件的回调函数。',
      },
    },
    {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of click on the area in this group',
        'zh-CN': '区域图 click 事件的回调函数。',
      },
      examples: [
        {
          name: 'A BarChart with customized click event handler',
          url: '/examples/BarChartWithCustomizedEvent',
        },
      ],
    },
    {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousedown on the area in this group',
        'zh-CN': '区域图 mousedown 事件的回调函数。',
      },
    },
    {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseup on the area in this group',
        'zh-CN': '区域图 mouseup 事件的回调函数。',
      },
    },
    {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousemove on the area in this group',
        'zh-CN': '区域图 mousemove 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseover on the area in this group',
        'zh-CN': '区域图 mouseover 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseout on the area in this group',
        'zh-CN': '区域图 mouseout 事件的回调函数。',
      },
    },
    {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseenter on the area in this group',
        'zh-CN': '区域图 mouseenter 事件的回调函数。',
      },
    },
    {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseleave on the area in this group',
        'zh-CN': '区域图 mouseleave 事件的回调函数。',
      },
    },
  ],
  parentComponents: ['AreaChart', 'ComposedChart'],
  childrenComponents: ['LabelList'],
};
