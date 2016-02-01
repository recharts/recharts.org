export default {
  name: 'Polygon',
  props: [
    {
      name: 'points',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The coordinates of all the vertexes of the polygon, like { x, y }.',
    },
  ],
  examples: [
  ],
};
