export default {
  name: 'ResponsiveContainer',
  desc: 'A container component to make charts adapt to the size of parent container. The props width and height should be a percentage string.',
  props: [
    {
      name: 'width',
      type: 'String',
      defaultVal: '\'100%\'',
      isOptional: false,
      desc: 'The percentage value of the chart\'s width.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: '\'100%\'',
      isOptional: false,
      desc: 'The percentage value of the chart\'s width.',
    },
  ],
  examples: [
    {
      name: 'ResponsiveContainer example',
      url: '//jsfiddle.net/f9r65cc9/embedded/result/',
      code: `<ResponsiveContainer>
  <LineChart data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
   <XAxis dataKey="name"/>
   <YAxis/>
   <CartesianGrid strokeDasharray="3 3"/>
   <Tooltip/>
   <Legend />
   <Line type="monotone" dataKey="pv" stroke="#8884d8" />
   <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>
</ResponsiveContainer>`,
    },
  ]
};
