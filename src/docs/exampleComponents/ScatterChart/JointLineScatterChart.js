import React, { Component } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data01 = [{ x: 10, y: 30 }, { x: 30, y: 200 }, { x: 45, y: 100 }, { x: 50, y: 400 }, { x: 70, y: 150 }, { x: 100, y: 250 }];
const data02 = [{ x: 30, y: 20 }, { x: 50, y: 180 }, { x: 75, y: 240 }, { x: 100, y: 100 }, { x: 120, y: 190 }];

export default class Example extends Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nxpLdg69/';

  render() {
    return (
      <ScatterChart
        width={600}
        height={400}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        <ZAxis type="number" range={[100]} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="A school" data={data01} fill="#8884d8" line shape="cross" />
        <Scatter name="B school" data={data02} fill="#82ca9d" line shape="diamond" />
      </ScatterChart>
    );
  }
}
