/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Examples from 'docs/exampleComponents';
import { getLocaleType, localeGet } from 'utils/LocaleUtils';
import { Link } from 'react-router';
import './ExampleView.scss';
import MonacoEditor from 'react-monaco-editor/lib';
import fetchFile from '../utils/fetchUtils';
import 'simple-line-icons/scss/simple-line-icons.scss';
import { combineFrameContent } from '../utils/iframeUtils';

const firstChartName = Object.keys(Examples)[0];
const cates = Object.keys(Examples).sort((a, b) => Examples[a].order - Examples[b].order);
const parseExampleComponent = (compName) => {
  const typeList = Object.keys(Examples);
  const res = typeList.filter((key) => {
    const entry = Examples[key];

    return !!entry.examples[compName];
  });

  if (res && res.length) {
    return {
      cateName: res[0],
      exampleName: compName,
      exampleComponent: Examples[res[0]].examples[compName],
    };
  }
  return null;
};

const EXAMPLE_CODE_CACHE = {};


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

  state = {
    isLoading: null,
    hasError: null,
    exampleCode: null,
    iframeCode: null,
  }

  componentDidMount() {
    const { page } = this.props;
    const exampleResult = parseExampleComponent(page);

    if (exampleResult) {
      this.fetchExampleCode(exampleResult.cateName, exampleResult.exampleName);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { page } = this.props;

    if (nextProps.page !== page) {
      const exampleResult = parseExampleComponent(nextProps.page);

      if (exampleResult) {
        this.fetchExampleCode(exampleResult.cateName, exampleResult.exampleName);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { iframeCode } = this.state;

    if (iframeCode && iframeCode !== prevState.iframeCode) {
      this.updateIframe(iframeCode);
    }
  }

  fetchExampleCode = (cateName, exampleName) => {
    // read code from cache
    if (EXAMPLE_CODE_CACHE[exampleName]) {
      this.setState({
        isLoading: false,
        hasError: false,
        exampleCode: EXAMPLE_CODE_CACHE[exampleName],
        iframeCode: null,
      });
      
      return;
    }
    
    this.setState({
      isLoading: true,
    });
    const url = `/examples/${cateName}/${exampleName}.js`;

    fetchFile(url)
      .then((res) => {
        EXAMPLE_CODE_CACHE[exampleName] = res;

        this.setState({
          isLoading: false,
          hasError: false,
          exampleCode: res,
          iframeCode: null,
        });
      }, () => {
        this.setState({
          isLoading: false,
          hasError: true,
          exampleCode: null,
          iframeCode: null,
        });
      });
  }

  handleRunCode = () => {
    if (this.editor) {
      const newCode = this.editor.getValue();

      this.setState({
        iframeCode: combineFrameContent(newCode),
      });
    }
  }

  updateIframe(iframeCode) {
    if (this.iframeNode) {
      const iframeDoc = this.iframeNode.contentDocument || this.iframeNode.contentWindow.document;

      iframeDoc.open();
      iframeDoc.write(iframeCode);
      iframeDoc.close();
    }
  }

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

  renderEditor(exampleResult) {
    const { isLoading, hasError, exampleCode } = this.state;
    let editorValue = '';

    if (isLoading === true) {
      editorValue = 'loading code ....';
    } else if (isLoading === false && hasError === true) {
      editorValue = 'loading code error';
    } else if (isLoading === false && hasError === false && exampleCode) {
      editorValue = exampleCode;
    }

    return exampleResult && isLoading !== null ? (
      <div className="monaco-editor-wrapper">
        <div className="monaco-editor-toolbar">
          <span role="button" className="monaco-editor-toolbar-item" onClick={this.handleRunCode} onKeyPress={this.handleRunCode}>
            <i className="icon-control-play" />
            <span>&nbsp;</span>
            <span>Run</span>
          </span>
          {/* <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <option className="monaco-editor-toolbar-item" onClick={this.handleRunCopy} onKeyPress={this.handleRunCopy}>
            <i className="icon-pencil" />
            <span>&nbsp;</span>
            <span>Copy</span>
          </option> */}
        </div>
        <div id="monaco-editor-container">
          <MonacoEditor
            ref={(el) => { this.editor = el && el.editor; }}
            key={`editor-${exampleResult.exampleName}`}
            value={editorValue}
            language="javascript"
            lineNumbers
            scrollBeyondLastLine
            automaticLayout
            renderLineHighlight="none"
            readOnly={false}
            theme="vs"
            minimap={{ enabled: false }}
          />
        </div>
      </div>
    ) : null;
  }

  renderIframe() {
    return <iframe title="demoIframe" height={500} ref={(node) => { this.iframeNode = node; }} />;
  }

  render() {
    const { iframeCode } = this.state;
    const { page } = this.props;
    const exampleResult = parseExampleComponent(page);
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
            exampleResult ? (
              <div className="example-wrapper">
                <div className="example-inner-wrapper">
                  <div className="example-chart-wrapper">
                    { iframeCode ? this.renderIframe() : <exampleResult.exampleComponent /> }
                  </div>
                  {this.renderEditor(exampleResult)}
                </div>
                {
                  exampleResult.exampleComponent.jsfiddleUrl ? (
                    <p className="example-link-wrapper">
                      <a
                        className="example-jsfiddle-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={exampleResult.exampleComponent.jsfiddleUrl}
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
