import React, { PropTypes, cloneElement, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import API from 'docs/api';
import APIExamples from 'docs/apiExamples';
import Highlight from 'utils/Highlight';
import { getLocaleType, localeGet, parseLocalObj } from 'utils/LocaleUtils';
import apiCates from 'docs/apiCates';
import './APIView.scss';

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

  renderPropsExamples(examples) {
    return examples.map((entry, i) => (
      <li key={`example-${i}`}>
         <a href={entry.url} target="_blank">{entry.name}</a>
      </li>
    ));
  }

  renderProps(props, locale) {
    if (!props || !props.length) {return null;}

    return props.map((entry, i) => (
      <li className="props-item" key={`props-${i}`}>
        <p className="header">
          <span className="title">{entry.name}</span>
          <span className="type">{entry.type}</span>
          {entry.isOptional ? <em className="optional">optional</em> : null}
        </p>
        <p className="desc">{parseLocalObj(locale, entry.desc)}</p>
        {entry.defaultVal && (entry.defaultVal !== 'null' && entry.defaultVal !== 'undefined') ? (
          <p className="default">
            <span className="title">{localeGet(locale, 'api', 'default')}</span>
            <span>{entry.defaultVal}</span>
          </p>
        ) : null}
        {entry.format && entry.format.length ? (
          <div className="format">
            <p className="title">{localeGet(locale, 'api', 'format')}</p>
            <Highlight className="jsx">
              {entry.format.join('\n')}
            </Highlight>
          </div>
        ) : null}
        {entry.examples && entry.examples.length ? (
          <div className="examples">
            <p className="title">{localeGet(locale, 'api', 'examples')}</p>
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
    const apiExamples = APIExamples[page];
    const locale = getLocaleType(this.props);

    return (
      <div className="page page-api">
        <Helmet title={page} />
        <div className="sidebar">
          <h2>API</h2>
          {
            apiCates.map(({ name, items }, index) => {
              return (
                <div className="sidebar-cate" key={`cate-${index}`}>
                  <h4>{localeGet(locale, 'api', name)}</h4>
                  <ul className="menu">
                    {
                      items.map((compName, j) => {
                        return (
                          <li key={`item-${j}`}>
                            <a
                              href={`/${locale}/api#${compName}`}
                              className={page === compName ? 'active' : ''}
                            >{compName}</a>
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              );
            })
          }
        </div>
        <div className="content">
          <h3>{page}</h3>
          {api.desc && <p className="survey">{parseLocalObj(locale, api.desc)}</p>}
          {this.renderExamples(apiExamples)}

          <h4 className="sub-title">Properties</h4>
          <ul className="props-list">
            {this.renderProps(api && api.props, locale)}
          </ul>
        </div>
      </div>
    );
  }
}

export default APIView;
