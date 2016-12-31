import React from 'react';
import { ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter,
  ErrorBar } from 'recharts';

const data = [
  { x: 45, y: 100, z: 150, errorY: [30, 20], errorX: 25 },
  { x: 100, y: 200, z: 200, errorY: [20, 30], errorX: 30 },
  { x: 120, y: 100, z: 260, errorY: 20, errorX: [20, 30] },
  { x: 170, y: 300, z: 400, errorY: [12, 8], errorX: 20 },
  { x: 140, y: 250, z: 280, errorY: 23, errorX: [12, 8] },
  { x: 150, y: 400, z: 500, errorY: [21, 10], errorX: 23 },
  { x: 110, y: 280, z: 200, errorY: 21, errorX: [21, 10] },
];

const example = () => {
  return (
    <ScatterChart width={730} height={250} margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
      <XAxis dataKey="x" name="stature" unit="cm" />
      <YAxis dataKey="y" name="weight" unit="kg" />
      <Scatter name="A school" data={data} fill="#ff7300">
        <ErrorBar dataKey="errorY" width={0} strokeWidth={1} stroke="blue" direction="y" />
        <ErrorBar dataKey="errorX" width={4} strokeWidth={2} stroke="green" opacity={0.8} direction="x" />
      </Scatter>
      <CartesianGrid />
      <Tooltip />
      <Legend/>
    </ScatterChart>
  )
};

const exampleCode = `
<ScatterChart width={730} height={250}
  margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
  <XAxis dataKey="x" name="stature" unit="cm" />
  <YAxis dataKey="y" name="weight" unit="kg" />
  <Scatter name="A school" data={data} fill="#ff7300">
    <ErrorBar dataKey="errorY" width={0} strokeWidth={1} stroke="blue" direction="y" />
    <ErrorBar dataKey="errorX" width={4} strokeWidth={2} stroke="green" opacity={0.8} direction="x" />
  </Scatter>
  <CartesianGrid />
  <Tooltip />
  <Legend/>
</ScatterChart>
`;

export default [
  {
    demo: example,
    code: exampleCode,
  }
];
