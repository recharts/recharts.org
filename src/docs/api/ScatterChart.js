export default {
  name: 'ScatterChart',
  props: [
    {
      name: 'width',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The width of chart container.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The width of chart container.',
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 5, right: 5, bottom: 5, left: 5 }',
      isOptional: true,
      desc: 'The sizes of whitespace around the container.',
      format: ['{ top: 5, right: 5, bottom: 5, left: 5 }'],
    },
  ],
  examples: [
    {
      name: 'Simple Scatter',
      url: '//jsfiddle.net/89u0cwwj/embedded/result/',
      code: `<ScatterChart width={400} height={400}
    margin={{top: 20, right: 20, bottom: 10, left: 10}}>
  <XAxis dataKey="x" name="stature" unit="cm"/>
  <YAxis dataKey="y" name="weight" unit="kg"/>
  <ZAxis dataKey="z" range={[4, 20]} name="score" unit="km"/>
  <CartesianGrid strokeDasharray="3 3"/>
  <Tooltip cursor={{strokeDasharray: '3 3'}}/>
  <Legend/>
  <Scatter name="A school" data={data01} fill="#8884d8"/>
  <Scatter name="B school" data={data02} fill="#82ca9d"/>
</ScatterChart>
`,
    },
  ]
};
