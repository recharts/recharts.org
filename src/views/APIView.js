import React, { cloneElement, Component } from 'react';
import { connect } from 'react-redux';
import API from 'docs/api';

@connect(state => {
  return {
    page: state.routing.location.hash ? state.routing.location.hash.slice(1) : 'AreaChart',
  };
})
class APIView extends Component {
  renderExamples(examples) {
    if (!examples || !examples.length) {return null;}
    return (
      <div className="examples">
        <h4>Examples</h4>
        {
          examples.map((item, i) => {
            return <p key={`examples-${i}`}><a href={item.url}>{item.name}</a></p>;
          })
        }
      </div>
    );
  }

  render() {
    const { children, page } = this.props;
    const api = API[page];

    return (
      <div className="page page-api">
        <div className="sidebar">
          <h2>API</h2>
          <h4>Charts</h4>
          <ul className="menu">
            <li>
              <a href="/api#AreaChart" className={page === 'AreaChart' ? 'active' : ''}>AreaChart</a>
            </li>
            <li>
              <a href="/api#BarChart" className={page === 'BarChart' ? 'active' : ''}>BarChart</a>
            </li>
            <li>
              <a href="/api#LineChart" className={page === 'LineChart' ? 'active' : ''}>LineChart</a>
            </li>
            <li>
              <a href="/api#ComposedChart" className={page === 'ComposedChart' ? 'active' : ''}>ComposedChart</a>
            </li>
            <li>
              <a href="/api#PieChart" className={page === 'PieChart' ? 'active' : ''}>PieChart</a>
            </li>
            <li>
              <a href="/api#RadarChart" className={page === 'RadarChart' ? 'active' : ''}>RadarChart</a>
            </li>
            <li>
              <a href="/api#RadialBarChart" className={page === 'RadialBarChart' ? 'active' : ''}>RadialBarChart</a>
            </li>
            <li>
              <a href="/api#ScatterChart" className={page === 'ScatterChart' ? 'active' : ''}>ScatterChart</a>
            </li>
            <li>
              <a href="/api#Treemap" className={page === 'Treemap' ? 'active' : ''}>Treemap</a>
            </li>
          </ul>

          <h4>General Components</h4>
          <ul className="menu">
            <li>
              <a href="/api#ResponsiveContainer" className={page === 'ResponsiveContainer' ? 'active' : ''}>ResponsiveContainer</a>
            </li>
            <li>
              <a href="/api#Legend" className={page === 'Legend' ? 'active' : ''}>Legend</a>
            </li>
            <li>
              <a href="/api#Tooltip" className={page === 'Tooltip' ? 'active' : ''}>Tooltip</a>
            </li>
          </ul>

          <h4>Cartesian Components</h4>
          <ul className="menu">
            <li>
              <a href="/api#Area" className={page === 'Area' ? 'active' : ''}>Area</a>
            </li>
            <li>
              <a href="/api#Bar" className={page === 'Bar' ? 'active' : ''}>Bar</a>
            </li>
            <li>
              <a href="/api#Line" className={page === 'Line' ? 'active' : ''}>Line</a>
            </li>
            <li>
              <a href="/api#Scatter" className={page === 'Scatter' ? 'active' : ''}>Scatter</a>
            </li>
            <li>
              <a href="/api#XAxis" className={page === 'XAxis' ? 'active' : ''}>XAxis</a>
            </li>
            <li>
              <a href="/api#YAxis" className={page === 'YAxis' ? 'active' : ''}>YAxis</a>
            </li>
            <li>
              <a href="/api#ZAxis" className={page === 'ZAxis' ? 'active' : ''}>ZAxis</a>
            </li>
            <li>
              <a href="/api#Brush" className={page === 'Brush' ? 'active' : ''}>Brush</a>
            </li>
            <li>
              <a href="/api#CartesianAxis" className={page === 'CartesianAxis' ? 'active' : ''}>CartesianAxis</a>
            </li>
            <li>
              <a href="/api#CartesianGrid" className={page === 'CartesianGrid' ? 'active' : ''}>CartesianGrid</a>
            </li>
            <li>
              <a href="/api#ReferenceLine" className={page === 'ReferenceLine' ? 'active' : ''}>ReferenceLine</a>
            </li>
          </ul>

          <h4>Polar Components</h4>
          <ul className="menu">
            <li>
              <a href="/api#Pie" className={page === 'Pie' ? 'active' : ''}>Pie</a>
            </li>
            <li>
              <a href="/api#Radar" className={page === 'Radar' ? 'active' : ''}>Radar</a>
            </li>
            <li>
              <a href="/api#RadialBar" className={page === 'RadialBar' ? 'active' : ''}>RadialBar</a>
            </li>
            <li>
              <a href="/api#PolarAngleAxis" className={page === 'PolarAngleAxis' ? 'active' : ''}>PolarAngleAxis</a>
            </li>
            <li>
              <a href="/api#PolarGrid" className={page === 'PolarGrid' ? 'active' : ''}>PolarGrid</a>
            </li>
            <li>
              <a href="/api#PolarRadiusAxis" className={page === 'PolarRadiusAxis' ? 'active' : ''}>PolarRadiusAxis</a>
            </li>
          </ul>

          <h4>Shapes</h4>
          <ul className="menu">
            <li>
              <a href="/api#Cross" className={page === 'Cross' ? 'active' : ''}>Cross</a>
            </li>
            <li>
              <a href="/api#Curve" className={page === 'Curve' ? 'active' : ''}>Curve</a>
            </li>
            <li>
              <a href="/api#Dot" className={page === 'Dot' ? 'active' : ''}>Dot</a>
            </li>
            <li>
              <a href="/api#Polygon" className={page === 'Polygon' ? 'active' : ''}>Polygon</a>
            </li>
            <li>
              <a href="/api#Rectangle" className={page === 'Rectangle' ? 'active' : ''}>Rectangle</a>
            </li>
            <li>
              <a href="/api#Sector" className={page === 'Sector' ? 'active' : ''}>Sector</a>
            </li>
            <li>
              <a href="/api#Triangle" className={page === 'Triangle' ? 'active' : ''}>Triangle</a>
            </li>
          </ul>

        </div>
        <div className="content">
          <h3>{api.name}</h3>
          {api.desc && <p className="survey">{api.desc}</p>}
          <h4>Properties</h4>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {
                api.props.map((item, i) => {
                  const optional = item.isOptional ? <em>optaional.</em> : '';

                  return (
                    <tr key={`api-${i}`}>
                      <td>{item.name}</td>
                      <td>{item.type}</td>
                      <td>{item.defaultVal}</td>
                      <td>{optional} <span>{item.desc}</span></td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
          {this.renderExamples(api && api.examples)}
        </div>
      </div>
    );
  }
}

export default APIView;
