import React, { Component } from 'react';
import Highlight from 'utils/Highlight';
import CustomAxisLabel from './CustomAxisLabel';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
              {name: 'Page B', uv: 300, pv: 4567, amt: 2400},
              {name: 'Page C', uv: 300, pv: 1398, amt: 2400},
              {name: 'Page D', uv: 200, pv: 9800, amt: 2400},
              {name: 'Page E', uv: 278, pv: 3908, amt: 2400},
              {name: 'Page F', uv: 189, pv: 4800, amt: 2400}];


const GettingStarted = () => {
  return (
    <div className="mod-getting-started" id="Getting_Started">
      <h3>Getting Started</h3>
      <h4>1. Choose the type of chart</h4>
      <p>Generates a simple chart by the data.</p>

      <div className="step-1">
        <Highlight className="jsx">
        {
          `<LineChart width={400} height={400} data={data}>
  <Line type="monotone" dataKey="uv" stroke="#ff7300"/>
</LineChart>`
        }
        </Highlight>

        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </LineChart>
      </div>

      <h4>2. Add componets need to be drawed</h4>
      <p>LineChart can have XAxis, YAxis, Legend, CartesianGrid and so on.</p>
      <div className="step-2">
        <Highlight className="jsx">
        {
          `<LineChart width={600} height={300} data={data}>
  <Line type="monotone" dataKey="uv" stroke="#ff7300"/>
  <CartesianGrid stroke="#ccc"/>
  <XAxis dataKey="name"/>
  <YAxis/>
</LineChart>`
        }
        </Highlight>

        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#ff7300"/>
          <CartesianGrid stroke="#ccc"/>
          <XAxis dataKey="name"/>
          <YAxis/>
        </LineChart>
      </div>

      <h4>3. Adjust the props of some components</h4>
      <p>For example, the margin-right shoule be bigger to display the whole x-axis, the width of y-axis should be smaller to be harmonize with the right, and the storke style of grid may need to be dashed.</p>
      <div className="step-3">
        <Highlight className="jsx">
        {
          `<LineChart width={600} height={300} data={data} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
  <Line type="monotone" dataKey="uv" stroke="#ff7300"/>
  <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
  <XAxis dataKey="name"/>
  <YAxis/>
</LineChart>`
        }
        </Highlight>

        <LineChart width={600} height={300} data={data} margin={{top: 20, right: 20, bottom: 5, left: 0}}>
          <Line type="monotone" dataKey="uv" stroke="#ff7300"/>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
          <XAxis dataKey="name"/>
          <YAxis width={40}/>
        </LineChart>
      </div>

      <h4>4. Add interaction</h4>
      <p>Default, we can add Tooltip.</p>
      <div className="step-4">
        <Highlight className="jsx">
        {
          `<LineChart width={600} height={300} data={data} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
  <Line type="monotone" dataKey="uv" stroke="#ff7300"/>
  <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
  <XAxis dataKey="name"/>
  <YAxis/>
  <Tooltip/>
</LineChart>`
        }
        </Highlight>

        <LineChart width={600} height={300} data={data} margin={{top: 20, right: 20, bottom: 5, left: 0}}>
          <Line type="monotone" dataKey="uv" stroke="#ff7300"/>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
          <XAxis dataKey="name"/>
          <YAxis width={40}/>
          <Tooltip/>
        </LineChart>
      </div>

      <h4>5. Custom some components</h4>
      <p>Default, we can add Tooltip.</p>
      <div className="step-5">
        <Highlight className="jsx">
        {
          `<LineChart width={600} height={300} data={data} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
  <Line type="monotone" dataKey="uv" stroke="#ff7300"/>
  <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
  <XAxis dataKey="name" label={<CustomAxisLabel/>}/>
  <YAxis/>
  <Tooltip/>
</LineChart>`
        }
        </Highlight>

        <LineChart width={600} height={300} data={data} margin={{top: 20, right: 20, bottom: 5, left: 0}}>
          <Line type="monotone" dataKey="uv" stroke="#ff7300"/>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
          <XAxis dataKey="name" label={<CustomAxisLabel/>}/>
          <YAxis width={40}/>
          <Tooltip/>
        </LineChart>
      </div>
    </div>
  );
}

export default GettingStarted;
