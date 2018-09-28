import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Examples from 'docs/exampleComponents';
import { getLocaleType, localeGet } from 'utils/LocaleUtils';
import { Link } from 'react-router';
import './ExampleView.scss';


const firstChartName = Object.keys(Examples)[0];
const cates = Object.keys(Examples).sort((a, b) => Examples[a].order - Examples[b].order);
const parseExampleComponent = (compName) => {
  const typeList = Object.keys(Examples);
  const res = typeList.filter((key) => {
    const entry = Examples[key];

    return !!entry.examples[compName];
  });

  if (res && res.length) {
    return Examples[res[0]].examples[compName];
  }
  return null;
};


@connect((state, ownProps) => {
  const pathname = ownProps.location.pathname || '';
  const paths = pathname.split('/');

  return {
    page: (paths && paths.length === 4) ? paths[3] : 'SimpleLineChart',
  };
})
class ExamplesView extends PureComponent {
  static propTypes = {
    page: PropTypes.string,
  };

  renderMenuList(type, locale) {
    const { page } = this.props;
    const examples = Examples[type].examples;
    const typeNameList = Object.keys(examples);

    const items = typeNameList.map(name => (
      <li key={name}>
        <Link to={`/${locale}/examples/${name}`} className={page === name ? 'active' : ''}>
          {name}
        </Link>
      </li>
    ));

    return <ul className="menu">{items}</ul>;
  }

  render() {
    const { page } = this.props;
    const ExampleComponent = parseExampleComponent(page);
    const locale = getLocaleType(this.props);

    return (
      <div className="page page-examples">
        <Helmet title={page} />
        <div className="sidebar">
          <h2>Examples</h2>

          {
            cates.map((cate, index) => (
              <div className="sidebar-cate" key={`cate-${index}`}>
                <h4>{cate}</h4>
                {this.renderMenuList(cate, locale)}
              </div>
            ))
          }

        </div>
        <div className="content">
          <h3 className="page-title">{page}</h3>
          {
            ExampleComponent ? (
              <div className="example-wrapper">
                <div className="example-chart-wrapper">
                  <ExampleComponent />
                </div>
                {
                  ExampleComponent.jsfiddleUrl ? (
                    <p className="example-link-wrapper">
                      <a
                        className="example-jsfiddle-link"
                        target="_blank"
                        href={ExampleComponent.jsfiddleUrl}
                      >
Try the demo in jsfiddle &gt;&gt;
                      </a>
                    </p>
                  ) : null
                }
              </div>
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default ExamplesView;
