import React, { Component } from 'react';
import Highlight from 'utils/Highlight';
import { BarChart, Bar, LineChart, Legend, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import CustomBarLabel from './CustomBarLabel';
import CustomAxisTick from './CustomAxisTick';
import TriangleBar from './TriangleBar';
import CustomTooltip from './CustomTooltip';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];

function Customize() {
  return (
    <div className="mod-customize" id="Customize">
      <h3>Customize</h3>

      <h4>1. Labels of line, area, bar, axis can be customized</h4>
      <p>For example, we can create a bar with customized label and customized axis tick.</p>
      <div className="demo">
        <Highlight className="e4x">
        {
`<BarChart width={600} height={300} data={data}>
  <XAxis dataKey="name" tick={<CustomAxisTick />} />
  <YAxis />
  <Bar type="monotone" dataKey="uv" barSize={30} fill="#8884d8"
    label={<CustomBarLabel />}/>
</BarChart>`
        }
        </Highlight>

        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" tick={<CustomAxisTick />} />
          <YAxis />
          <Bar type="monotone" dataKey="uv" barSize={30} fill="#8884d8" label={<CustomBarLabel />} />
        </BarChart>
      </div>

      <h4>2. The shape of bar can be customized</h4>
      <p>Generates a simple chart by the data.</p>
      <div className="demo">
        <Highlight className="e4x">
        {
`<BarChart width={600} height={300} data={data}>
  <XAxis dataKey="name" tick={<CustomAxisTick />} />
  <YAxis />
  <Bar type="monotone" dataKey="uv" fill="#8884d8"
    shape={<TriangleBar />} />
</BarChart>`
        }
        </Highlight>

        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" tick={<CustomAxisTick />} />
          <YAxis />
          <Bar type="monotone" dataKey="uv" fill="#8884d8" shape={<TriangleBar />} />
        </BarChart>
      </div>

      <h4>3. The content of tooltip can be customized</h4>
      <p>Sometime we may want tooltip to display much more information.</p>
      <div className="demo">
        <Highlight className="e4x">
        {
`<BarChart width={600} height={300} data={data}>
  <XAxis dataKey="name" tick={<CustomAxisTick />} />
  <YAxis />
  <Tooltip content={<CustomTooltip />}/>
  <Bar type="monotone" dataKey="uv" fill="#8884d8"
    shape={<TriangleBar />} />
</BarChart>`
        }
        </Highlight>

        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" tick={<CustomAxisTick />} />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar type="monotone" dataKey="uv" fill="#8884d8" shape={<TriangleBar />} />
        </BarChart>
      </div>

      <h4>4. The style of each chart element can be customized</h4>
      <p>Except tooltip and legend, all the element in a chart is drawn by svg element. So you can change the attributes of each chart element conveniently.</p>
      <div className="demo">
        <Highlight className="e4x">
        {
`<BarChart width={600} height={300} data={data}>
  <XAxis dataKey="name" stroke="#8884d8" />
  <YAxis />
  <Tooltip />
  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
  <Bar type="monotone" dataKey="uv" fill="#8884d8" barSize={30} />
</BarChart>`
        }
        </Highlight>

        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" stroke="red" />
          <YAxis stroke="red" />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar type="monotone" dataKey="uv" fill="green" barSize={30} />
        </BarChart>
      </div>

      <h4>5. The style of tooltip, legend can be customized</h4>
      <p>Though tooltip, legend are drawn by svg elements, you may change the style of tooltip, legend by the apis wo offer. of cource, you can change the style in css too.</p>
      <div className="demo">
        <Highlight className="e4x">
        {
`<BarChart width={600} height={300} data={data}>
  <XAxis dataKey="name" stroke="#8884d8" />
  <YAxis />
  <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
  <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
  <Bar type="monotone" dataKey="uv" fill="#8884d8" barSize={30} />
</BarChart>`
        }
        </Highlight>

        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
          <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar type="monotone" dataKey="uv" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
    </div>
  );
}

export default Customize;
