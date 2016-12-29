export default {
  name: 'Cell',
  desc: 'Cell can be wrapped by Pie, Bar, or RadialBar to specify attributes of each child. In Pie , for example, we can specify the attributes of each child node through data, but the props of Cell have higher priority',
  props: [
    {
      name: 'fill',
      type: 'String',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The presentation attribute of a rectangle in bar or a sector in pie.',
    },
    {
      name: 'stroke',
      type: 'String',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The presentation attribute of a rectangle in bar or a sector in pie.',
    },
  ],
};
