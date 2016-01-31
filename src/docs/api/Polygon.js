export default {
  name: 'Polygon',
  props: [
    {
      name: 'points',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The coordinates of all the vertexes, like { x, y }.',
    },
  ],
  examples: [
  ],
};
