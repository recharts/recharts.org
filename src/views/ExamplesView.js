import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import Examples from 'docs/examples';

const firstChartName = Object.keys(Examples)[0];

@connect(state => {
  return {
    page: state.routing.location.pathname.split('/').filter(item => !!item)[1] || firstChartName,
  };
}, { push: routeActions.push })
class ExamplesView extends Component {
  handleNavRoute(route, e) {
    e.preventDefault();

    const { push } = this.props;

    push(route);
  }

  renderMenuList(type) {
    const { page } = this.props;
    const typeNameList = Object.keys(Examples).filter(name => {
      return name.indexOf(type) >= 0;
    });

    const items = typeNameList.map(name => {
      return (
        <li key={name}>
          <a href="#" className={page === name ? 'active' : ''}
            onClick={this.handleNavRoute.bind(this, `/examples/${name}`)}>{name}</a>
        </li>
      );
    });

    return <ul className="menu">{items}</ul>;
  }

  render() {
    const { page } = this.props;
    const examples = Examples[page];

    return (
      <div className="page page-examples">
        <div className="sidebar">
          <h2>Examples</h2>

          <h4>LineChart</h4>
          {this.renderMenuList('LineChart')}

          <h4>BarChart</h4>
          {this.renderMenuList('BarChart')}

          <h4>AreaChart</h4>
          {this.renderMenuList('AreaChart')}

          <h4>ComposedChart</h4>
          {this.renderMenuList('ComposedChart')}

        </div>
        <div className="content">
          <h3>{page}</h3>
          <iframe src={examples} allow-modals allow-forms allow-popups allow-scripts allow-same-origin>
          </iframe>
        </div>
      </div>
    );
  }
}

export default ExamplesView;
