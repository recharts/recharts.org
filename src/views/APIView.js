import React, { PropTypes, cloneElement, Component } from 'react';
import { connect } from 'react-redux';
import API from 'docs/api';
import Highlight from 'utils/Highlight';
import pureRender from 'pure-render-decorator';
import './APIView.scss';

@pureRender
@connect((state, ownProps) => ({
  page: ownProps.location.hash ? ownProps.location.hash.slice(1) : 'AreaChart',
}))
class APIView extends Component {
  static propTypes = {
    page: PropTypes.string,
  };

  renderExamples(examples) {
    if (!examples || !examples.length) { return null; }

    return (
      <div className="examples">
        <ul className="example-list">
          {
            examples.map((item, i) => (
              <li key={`example-${i}`}>
                <div className="iframe-wrapper">
                  {item.demo()}
                </div>
                <div className="code">
                  <Highlight className="e4x">{item.code}</Highlight>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }

  renderFormat(format) {
    return format.join('\n');
  }

  renderPropsExamples(examples) {
    return examples.map((entry, i) => (
      <li key={`example-${i}`}>
         <a href={entry.url} target="_blank">{entry.name}</a>
      </li>
    ));
  }

  renderProps(props) {
    if (!props || !props.length) {return null;}

    return props.map((entry, i) => (
      <li className="props-item" key={`props-${i}`}>
        <p className="header">
          <span className="title">{entry.name}</span>
          <span className="type">{entry.type}</span>
          {entry.isOptional ? <em className="optaional">optaional</em> : null}
        </p>
        <p className="desc">{entry.desc}</p>
        {entry.defaultVal ? (
          <p className="default">
            <span className="title">DEFAULT:</span>
            <span>{entry.defaultVal}</span>
          </p>
        ) : null}
        {entry.format && entry.format.length ? (
          <div className="format">
            <p className="title">Format:</p>
            <Highlight className="jsx">
              {this.renderFormat(entry.format)}
            </Highlight>
          </div>
        ) : null}
        {entry.examples && entry.examples.length ? (
          <div className="examples">
            <p className="title">Examples:</p>
            <ul className="list">
              {this.renderPropsExamples(entry.examples)}
            </ul>
          </div>
        ) : null}
      </li>
    ));
  }

  render() {
    const { page } = this.props;
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
            <li>
              <a href="/api#Cell" className={page === 'Cell' ? 'active' : ''}>Cell</a>
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
            <li>
              <a href="/api#ReferenceDot" className={page === 'ReferenceDot' ? 'active' : ''}>ReferenceDot</a>
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
          {this.renderExamples(api && api.examples)}

          <h4 className="sub-title">Properties</h4>
          <ul className="props-list">
            {this.renderProps(api && api.props)}
          </ul>
        </div>
      </div>
    );
  }
}

export default APIView;
