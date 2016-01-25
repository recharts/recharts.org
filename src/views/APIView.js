import React, { cloneElement, Component } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import API from 'docs/api';

@connect(state => {
  return {
    page: state.routing.location.pathname.split('/').filter(item => !!item)[1] || 'AreaChart',
  };
}, { push: routeActions.push })
class APIView extends Component {
  handleNavRoute(route, e) {
    e.preventDefault();

    const { push } = this.props;

    push(route);
  }

  render() {
    const { children, page } = this.props;
    const api = API[page];

    return (
      <div className="page page-api">
        <div className="sidebar">
          <h2>API</h2>
          <h4>Chart Wrappers</h4>
          <ul className="menu">
            <li>
              <a href="#" className={page === 'AreaChart' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/AreaChart')}>AreaChart</a>
            </li>
            <li>
              <a href="#" className={page === 'BarChart' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/BarChart')}>BarChart</a>
            </li>
            <li>
              <a href="#" className={page === 'LineChart' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/LineChart')}>LineChart</a>
            </li>
            <li>
              <a href="#" className={page === 'PieChart' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/PieChart')}>PieChart</a>
            </li>
            <li>
              <a href="#" className={page === 'RadialBarChart' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/RadialBarChart')}>RadialBarChart</a>
            </li>
            <li>
              <a href="#" className={page === 'ScatterChart' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/ScatterChart')}>ScatterChart</a>
            </li>
            <li>
              <a href="#" className={page === 'TreemapChart' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/TreemapChart')}>TreemapChart</a>
            </li>
          </ul>

          <h4>Chart Components</h4>
          <ul className="menu">
            <li>
              <a href="#" className={page === 'Area' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/Area')}>Area</a>
            </li>
            <li>
              <a href="#" className={page === 'Bar' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/Bar')}>Bar</a>
            </li>
            <li>
              <a href="#" className={page === 'Line' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/Line')}>Line</a>
            </li>
            <li>
              <a href="#" className={page === 'Pie' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/Pie')}>Pie</a>
            </li>
            <li>
              <a href="#" className={page === 'RadialBar' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/RadialBar')}>RadialBar</a>
            </li>
            <li>
              <a href="#" className={page === 'Scatter' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/Scatter')}>Scatter</a>
            </li>
            <li>
              <a href="#" className={page === 'XAxis' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/XAxis')}>XAxis</a>
            </li>
            <li>
              <a href="#" className={page === 'YAxis' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/YAxis')}>YAxis</a>
            </li>
            <li>
              <a href="#" className={page === 'ZAxis' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/ZAxis')}>ZAxis</a>
            </li>
          </ul>

          <h4>General Components</h4>
          <ul className="menu">
            <li>
              <a href="#" className={page === 'Brush' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/Brush')}>Brush</a>
            </li>
            <li>
              <a href="#" className={page === 'CartesianAxis' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/CartesianAxis')}>CartesianAxis</a>
            </li>
            <li>
              <a href="#" className={page === 'CartesianGrid' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/CartesianGrid')}>CartesianGrid</a>
            </li>
            <li>
              <a href="#" className={page === 'Legend' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/Legend')}>Legend</a>
            </li>
            <li>
              <a href="#" className={page === 'ReferenceLine' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/ReferenceLine')}>ReferenceLine</a>
            </li>
            <li>
              <a href="#" className={page === 'Tooltip' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/Tooltip')}>Tooltip</a>
            </li>
          </ul>

          <h4>Shapes</h4>
          <ul className="menu">
            <li>
              <a href="#" className={page === 'Cross' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/Cross')}>Cross</a>
            </li>
            <li>
              <a href="#" className={page === 'Curve' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/Curve')}>Curve</a>
            </li>
            <li>
              <a href="#" className={page === 'Dot' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/Dot')}>Dot</a>
            </li>
            <li>
              <a href="#" className={page === 'Rectangle' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/Rectangle')}>Rectangle</a>
            </li>
            <li>
              <a href="#" className={page === 'Sector' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/Sector')}>Sector</a>
            </li>
            <li>
              <a href="#" className={page === 'Triangle' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/Triangle')}>Triangle</a>
            </li>
          </ul>

        </div>
        <div className="content">
          <h3>{api.name}</h3>
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
          <h4>Examples</h4>
          {
            api.examples.map((item, i) => {
              return <p key={`examples-${i}`}><a href={item.url}>{item.name}</a></p>;
            })
          }
        </div>
      </div>
    );
  }
}

export default APIView;
