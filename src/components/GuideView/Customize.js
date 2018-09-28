import React from 'react';
import Highlight from 'utils/Highlight';
import {
  BarChart, Bar, LineChart, Legend, Line, XAxis, YAxis, Tooltip, CartesianGrid,
} from 'recharts';
import CustomBarLabel from './CustomBarLabel';
import CustomAxisTick from './CustomAxisTick';
import TriangleBar from './TriangleBar';
import CustomTooltip from './CustomTooltip';
import { localeGet } from '../../utils/LocaleUtils';

const data = [
  {
    name: 'Page A', uv: 400, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 300, pv: 4567, amt: 2400,
  },
  {
    name: 'Page C', uv: 300, pv: 1398, amt: 2400,
  },
  {
    name: 'Page D', uv: 200, pv: 9800, amt: 2400,
  },
  {
    name: 'Page E', uv: 278, pv: 3908, amt: 2400,
  },
  {
    name: 'Page F', uv: 189, pv: 4800, amt: 2400,
  },
];

function Customize({ locale }) {
  return (
    <div className="mod-customize" id="Customize">
      <h3 className="page-title">{localeGet(locale, 'customize', 'customize')}</h3>

      <h4 className="sub-title">{localeGet(locale, 'customize', 'step-1-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'customize', 'step-1-desc')}</p>
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

      <h4 className="sub-title">{localeGet(locale, 'customize', 'step-2-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'customize', 'step-2-desc')}</p>
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

      <h4 className="sub-title">{localeGet(locale, 'customize', 'step-3-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'customize', 'step-3-desc')}</p>
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

      <h4 className="sub-title">{localeGet(locale, 'customize', 'step-4-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'customize', 'step-4-desc')}</p>
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

      <h4 className="sub-title">{localeGet(locale, 'customize', 'step-5-title')}</h4>
      <p className="paragraph-title">{localeGet(locale, 'customize', 'step-5-desc')}</p>
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
          <Legend
            width={100}
            wrapperStyle={{
              top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px',
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar type="monotone" dataKey="uv" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
    </div>
  );
}

export default Customize;
