export default {
  name: 'Text',
  examples: [],
  props: [
    {
      name: 'scaleToFit',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: 'Scale the text to fit the width or not.',
    }, {
      name: 'angle',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The rotate angle of Text.',
    }, {
      name: 'width',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The width of Text. When the width is specified to be a number, the text will warp auto by calculating the width of text.',
    }, {
      name: 'textAnchor',
      type: `'start', 'middle', 'end', 'inherit'`,
      defaultVal: 'start',
      isOptional: false,
    }, {
      name: 'verticalAnchor',
      type: `'start', 'middle', 'end'`,
      defaultVal: 'end',
      isOptional: false,
    },
  ],
};
