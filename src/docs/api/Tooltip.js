export default {
  name: 'Tooltip',
  examples: [],
  props: [
    {
      name: 'separator',
      type: 'String',
      defaultVal: '\' : \'',
      isOptional: false,
      desc: 'The separator between name and value.',
    }, {
      name: 'offset',
      type: 'Number',
      defaultVal: '10',
      isOptional: false,
      desc: 'The offset size between the position of tooltip and the active position.',
    }, {
      name: 'itemStyle',
      type: 'Object',
      defaultVal: '{}',
      isOptional: false,
      desc: 'The style of default tooltip content item which is a li element.',
      examples: [{
        name: 'React Inline style',
        url: 'https://facebook.github.io/react/tips/inline-styles.html',
      }],
    },  {
      name: 'wrapperStyle',
      type: 'Object',
      defaultVal: '{}',
      isOptional: false,
      desc: 'The style of tooltip wrapper which is a dom element.',
      examples: [{
        name: 'React Inline style',
        url: 'https://facebook.github.io/react/tips/inline-styles.html',
      }],
    },  {
      name: 'labelStyle',
      type: 'Object',
      defaultVal: '{}',
      isOptional: false,
      desc: 'The style of default tooltip label which is a p element.',
      examples: [{
        name: 'React Inline style',
        url: 'https://facebook.github.io/react/tips/inline-styles.html',
      }],
    }, {
      name: 'cursor',
      type: 'Boolean | Object | ReactElement',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If set false, no cursor will be drawed when tooltip is active. If set a object, the option is the configuration of cursor. If set a React element, the option is the custom react element of drawing cursor.',
      format: [
        `<Tooltip cursor={false} />`,
        `<Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />`,
        `<Tooltip cursor={<CustomizedCursor />} />`,
      ],
    }, {
      name: 'viewBox',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The box of viewing area, which has the shape of {x: someVal, y: someVal, width: someVal, height: someVal}, usually calculated internally.',
      format: [`{ x: 0, y: 0, width: 400, height: 400 }`],
    }, {
      name: 'active',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If set true, the tooltip is displayed. If set false, the tooltip is hidden, usually calculated internally.',
    }, {
      name: 'coordinate',
      type: 'Object',
      defaultVal: '{ x: 0, y: 0 }',
      isOptional: false,
      desc: 'The coordinate of tooltip position, usually calculated internally.',
      format: [`{ x: 100, y: 140 }`],
    }, {
      name: 'payload',
      type: 'Array',
      defaultVal: '[]',
      isOptional: false,
      desc: 'The source data of the content to be displayed in the tooltip, usually calculated internally.',
      format: [`[{ name: '05-01', value: 12, unit: 'kg' }]`],
    }, {
      name: 'label',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The label value which is active now, usually calculated internally.',
    }, {
      name: 'content',
      type: 'ReactElement | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set a React element, the option is the custom react element of rendering tooltip.  If set a function, the function will be called to render tooltip content.',
      format: [
        `<Tooltip content={<CustomizedTooltip external={external} />} />`,
        `<Tooltip content={renderTooltip} />`,
      ],
      examples: [
        {
          name: 'Customize tooltip content',
          url: '/examples#CustomContentOfTooltip',
        }
      ],
    }, {
      name: 'formatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The formatter function of value in tooltip.',
    }, {
      name: 'labelFormatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The formatter function of label in tooltip.',
    },
  ],
};
