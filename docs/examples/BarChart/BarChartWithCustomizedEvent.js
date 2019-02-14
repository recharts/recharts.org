import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: -3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: -2000, pv: -9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: -1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: -3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/7has60ua/';

  state = {
    data: [
      {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
      },
      {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
      },
      {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
      },
      {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
      },
      {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
      },
      {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
      },
      {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
      },
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];

    return (
      <div>
        <p>Click each rectangle </p>
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" onClick={this.handleClick}>
            {
                data.map((entry, index) => (
                  <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
                ))
              }
          </Bar>
        </BarChart>
        <p className="content">{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p>
      </div>
    );
  }
}
