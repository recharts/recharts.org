import React, { Component } from 'react';
import Highlight from 'utils/Highlight';
import CustomAxisTick from './CustomAxisTick';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { localeGet } from '../../utils/LocaleUtils';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];


const GettingStarted = ({ locale }) => (
  <div className="mod-getting-started" id="Getting_Started">
    <h3>{localeGet(locale, 'getting-started', 'getting-started')}</h3>
    <h4>{localeGet(locale, 'getting-started', 'step-1-title')}</h4>
    <p>{localeGet(locale, 'getting-started', 'step-1-desc')}</p>

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

    <h4>{localeGet(locale, 'getting-started', 'step-2-title')}</h4>
    <p>{localeGet(locale, 'getting-started', 'step-2-desc')}</p>
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

    <h4>{localeGet(locale, 'getting-started', 'step-3-title')}</h4>
    <p>{localeGet(locale, 'getting-started', 'step-3-desc')}</p>
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

    <h4>{localeGet(locale, 'getting-started', 'step-4-title')}</h4>
    <p>{localeGet(locale, 'getting-started', 'step-4-desc')}</p>
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

    <h4>{localeGet(locale, 'getting-started', 'step-5-title')}</h4>
    <p>{localeGet(locale, 'getting-started', 'step-5-desc')}</p>
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
