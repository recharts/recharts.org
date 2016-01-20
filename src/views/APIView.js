import React, { cloneElement, Component } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import API from 'docs/api';

@connect(state => {
  return {
    page: state.routing.location.pathname.split('/').filter(item => !!item)[1] || 'area',
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
          <ul className="menu">
            <li>
              <a href="#" className={page === 'area' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/area')}>Area</a>
            </li>
            <li>
              <a href="#" className={page === 'bar' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/bar')}>Bar</a>
            </li>
            <li>
              <a href="#" className={page === 'line' ? 'active' : ''}
                onClick={this.handleNavRoute.bind(this, '/api/line')}>Line</a>
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
