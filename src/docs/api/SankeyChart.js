export default {
  name: 'SankeyChart',
  desc: {
    'en-US': 'A container component to make charts adapt to the size of parent container. One of the props width and height should be a percentage string.',
  },
  props: [
    {
      name: 'nameKey',
      type: 'String',
      defaultVal: 'name',
      isOptional: true,
      desc: {
        'en-US': "The key of each sector's name.",
      },
    }, {
      name: 'dataKey',
      type: 'String',
      defaultVal: 'value',
      isOptional: true,
      desc: {
        'en-US': 'The key of a group of data which should be unique in a SankeyChart.',
      },
    },
    {
      name: 'width',
      type: 'Percentage | Number',
      defaultVal: '\'100%\'',
      isOptional: false,
      desc: {
        'en-US': 'The percentage value of the chart\'s width or a fixed width.',
      },
    }, {
      name: 'height',
      type: 'Percentage | Number',
      defaultVal: '\'100%\'',
      isOptional: false,
      desc: {
        'en-US': 'The percentage value of the chart\'s width or a fixed height.',
      },
    }, {
      name: 'data',
      type: 'Object',
      defaultVal: 'undefined',
      isOptional: false,
      desc: {
        'en-US': 'The source data, in which each element is an object.', // define better
      },
      format: [
        'nodes: [',
        "  { name: 'Visit' },",
        "  { name: 'Direct-Favourite' },",
        "  { name: 'Page-Click' },",
        "  { name: 'Detail-Favourite' },",
        "  { name: 'Lost' },",
        '],',
        'links: [',
        '  { source: 0, target: 1, value: 3728.3 },',
        '  { source: 0, target: 2, value: 354170 },',
        '  { source: 2, target: 3, value: 62429 },',
        '  { source: 2, target: 4, value: 291741 },',
        '],',
      ],
    }, {
      name: 'nodePadding',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'Specify the padding between the nodes',
      },
    }, {
      name: 'nodeWidth',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'If specified a positive number, debounced function will be used to handle the resize event.',
      },
    }, {
      name: 'linkCurvature',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'If specified a positive number, debounced function will be used to handle the resize event.',
      },
    }, {
      name: 'iterations',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'If specified a positive number, debounced function will be used to handle the resize event.',
      },
    }, {
      name: 'node',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'If specified a positive number, debounced function will be used to handle the resize event.',
      },
    }, {
      name: 'link',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'If specified a positive number, debounced function will be used to handle the resize event.',
      },
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 5, right: 5, bottom: 5, left: 5 }',
      isOptional: false,
      desc: {
        'en-US': 'The sizes of whitespace around the container.',
      },
      format: [
        '{ top: 5, right: 5, bottom: 5, left: 5 }',
      ],
    }, {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of click on the area in this group',
      },
    }, {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseenter on the area in this group',
      },
    }, {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseleave on the area in this group',
      },
    }, {
      name: 'sourceX',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'If specified a positive number, debounced function will be used to handle the resize event.',
      },
    }, {
      name: 'sourceY',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'If specified a positive number, debounced function will be used to handle the resize event.',
      },
    }, {
      name: 'sourceControlX',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'If specified a positive number, debounced function will be used to handle the resize event.',
      },
    }, {
      name: 'targetX',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'If specified a positive number, debounced function will be used to handle the resize event.',
      },
    }, {
      name: 'targetY',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'If specified a positive number, debounced function will be used to handle the resize event.',
      },
    }, {
      name: 'targetControlX',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'If specified a positive number, debounced function will be used to handle the resize event.',
      },
    }, {
      name: 'linkWidth',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'If specified a positive number, debounced function will be used to handle the resize event.',
      },
    },
  ],
  childrenComponents: [
    'Tooltip',
  ],
};
