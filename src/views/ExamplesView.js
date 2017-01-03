import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Examples from 'docs/examples';
import { getLocaleType, localeGet } from 'utils/LocaleUtils';

const firstChartName = Object.keys(Examples)[0];
const cates = ['LineChart', 'BarChart', 'AreaChart', 'ComposedChart', 'ScatterChart',
  'PieChart', 'RadarChart', 'RadialBarChart', 'Treemap', 'Tooltip', 'ResponsiveContainer',
];

@connect((state, ownProps) => ({
  page: ownProps.location.hash ? ownProps.location.hash.slice(1) : firstChartName,
}))
class ExamplesView extends Component {
  static propTypes = {
    page: PropTypes.string,
  };

  renderMenuList(type, locale) {
    const { page } = this.props;
    const typeNameList = Object.keys(Examples).filter(name => {
      if (type === 'BarChart') {
        return name.indexOf(type) >= 0 && name.indexOf('RadialBarChart') === -1;
      }
      return name.indexOf(type) >= 0;
    });

    const items = typeNameList.map(name => (
      <li key={name}>
        <a href={`/${locale}/examples#${name}`} className={page === name ? 'active' : ''}>{name}</a>
      </li>
    ));

    return <ul className="menu">{items}</ul>;
  }

  render() {
    const { page } = this.props;
    const examples = Examples[page];
    const locale = getLocaleType(this.props);

    return (
      <div className="page page-examples">
        <Helmet title={page} />
        <div className="sidebar">
          <h2>Examples</h2>

          {
            cates.map((cate, index) => {
              return (
                <div className="sidebar-cate" key={`cate-${index}`}>
                  <h4>{cate}</h4>
                  {this.renderMenuList(cate, locale)}
                </div>
              );
            })
          }

        </div>
        <div className="content">
          <h3>{page}</h3>
          <iframe src={examples}></iframe>
        </div>
      </div>
    );
  }
}

export default ExamplesView;
