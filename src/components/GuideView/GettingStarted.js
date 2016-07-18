import React, { Component } from 'react';
import Highlight from 'utils/Highlight';
import CustomAxisTick from './CustomAxisTick';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];


const GettingStarted = () => (
  <div className="mod-getting-started" id="Getting_Started">
    <h3>Getting Started</h3>
    <h4>1. Choose the type of chart you need</h4>
    <p>Generates a simple chart by using plain javascript data (usually an array of objects).</p>

    <div className="step-1">
      <Highlight className="e4x">
      {
`<LineChart width={400} height={400} data={data}>
  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
</LineChart>`
      }
      </Highlight>

      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </div>

    <h4>2. Add components that you want to be drawn</h4>
    <p>LineChart can have XAxis, YAxis, Legend, CartesianGrid and so on.</p>
    <div className="step-2">
      <Highlight className="e4x">
      {
`<LineChart width={600} height={300} data={data}>
  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  <CartesianGrid stroke="#ccc" />
  <XAxis dataKey="name" />
  <YAxis />
</LineChart>`
      }
      </Highlight>

      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>

    <h4>3. Adjust the props of some components</h4>
    <p>For example, margin-right should be bigger in order to display the right-most x-axis label and the stroke style of the cartesian grid can be dashed for better readability.</p>
    <div className="step-3">
      <Highlight className="e4x">
      {
`<LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
  <XAxis dataKey="name" />
  <YAxis />
</LineChart>`
      }
      </Highlight>

      <LineChart width={600} height={300} data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis width={40} />
      </LineChart>
    </div>

    <h4>4. Add interactions</h4>
    <p>We can easily drop-in a Tooltip component and have rich hovering tooltip functionality.</p>
    <div className="step-4">
      <Highlight className="e4x">
      {
`<LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
</LineChart>`
      }
      </Highlight>

      <LineChart width={600} height={300} data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis width={40} />
        <Tooltip />
      </LineChart>
    </div>

    <h4>5. Customize your components</h4>
    <p>For example, you can edit your x-axis label very easily by passing in a custom axis tick component. You can do similar things with other graphs as well, such as custom shapes for bar charts and much more!</p>
    <div className="step-5">
      <Highlight className="e4x">
      {
`<LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
  <XAxis dataKey="name" tick={<CustomAxisTick />} />
  <YAxis />
  <Tooltip />
</LineChart>`
      }
      </Highlight>

      <LineChart width={600} height={300} data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" tick={<CustomAxisTick />} />
        <YAxis width={40} />
        <Tooltip />
      </LineChart>
    </div>
  </div>
);

export default GettingStarted;
