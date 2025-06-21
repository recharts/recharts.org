/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, withRouter } from 'react-router-dom';
import { Runner } from 'react-runner';
import * as ReactScope from 'react';
import * as RechartsScope from 'recharts';
import * as D3ShapeScope from 'd3-shape';
import { Editor } from '@monaco-editor/react';
import Examples from '../docs/exampleComponents';
import { getLocaleType } from '../utils/LocaleUtils';
import './ExampleView.scss';
import fetchFile from '../utils/fetchUtils';
import 'simple-line-icons/scss/simple-line-icons.scss';

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

class ExamplesView extends PureComponent {
  state = {
    isLoading: null,
    hasError: null,
    exampleCode: null,
    prevPage: null,
  };

  editorRef = React.createRef(null);

  static getDerivedStateFromProps(nextProps, prevState) {
    const { match } = nextProps;
    const page = match?.params?.name;
    if (page !== prevState.prevPage) {
      return {
        prevPage: page,
      };
    }

    return null;
  }

  componentDidMount() {
    const page = this.getPage();
    const exampleResult = parseExampleComponent(page);

    if (exampleResult) {
      this.fetchExampleCode(exampleResult.cateName, exampleResult.exampleName);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const page = this.getPage();

    if (prevState.prevPage !== page) {
      // page change
      const exampleResult = parseExampleComponent(page);
      console.log(page);

      if (exampleResult) {
        this.fetchExampleCode(exampleResult.cateName, exampleResult.exampleName);
      }
    }
  }

  fetchExampleCode = (cateName, exampleName) => {
    // read code from cache
    if (EXAMPLE_CODE_CACHE[exampleName]) {
      this.setState({
        isLoading: false,
        hasError: false,
        exampleCode: EXAMPLE_CODE_CACHE[exampleName],
      });

      return;
    }

    this.setState({
      isLoading: true,
    });
    const url = `/examples/${cateName}/${exampleName}.js`;

    fetchFile(url).then(
      (res) => {
        EXAMPLE_CODE_CACHE[exampleName] = res;

        this.setState({
          isLoading: false,
          hasError: false,
          exampleCode: res,
        });
      },
      () => {
        this.setState({
          isLoading: false,
          hasError: true,
          exampleCode: null,
        });
      },
    );
  };

  handleRunCode = () => {
    if (this.editorRef.current)
      this.setState({
        exampleCode: this.editorRef.current.getValue(),
      });
  };

  renderMenuList(type, locale) {
    const page = this.getPage();
    const { examples } = Examples[type];
    const typeNameList = Object.keys(examples);

    const items = typeNameList.map((name) => (
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
    } else if (isLoading === false && hasError === false) {
      editorValue = exampleCode;
      this.setState({
        exampleCode: editorValue,
      });
    }

    return exampleResult && isLoading !== null ? (
      <div className="monaco-editor-wrapper">
        <div className="monaco-editor-toolbar">
          <button type="button" className="monaco-editor-toolbar-item" onClick={this.handleRunCode}>
            <i className="icon-control-play" />
            <span>&nbsp;</span>
            <span>Run</span>
          </button>
        </div>
        <div id="monaco-editor-container">
          <Editor
            key={`editor-${exampleResult.exampleName}`}
            value={editorValue}
            defaultLanguage="javascript"
            options={{ tabSize: 2 }}
            onMount={(editor) => {
              this.editorRef.current = editor;
            }}
          />
        </div>
      </div>
    ) : null;
  }

  renderResult() {
    const scope = {
      // scope used by import statement in editor
      import: {
        react: ReactScope,
        recharts: RechartsScope,
        'd3-shape': D3ShapeScope,
      },
    };

    return (
      <div className="example-chart-wrapper">
        <div className="example-chart-responsive-container">
          <Runner code={this.state.exampleCode} scope={scope} />
        </div>
      </div>
    );
  }

  getPage() {
    const { match } = this.props;
    const page = match?.params?.name ?? 'SimpleLineChart';
    return page;
  }

  render() {
    const page = this.getPage();

    const exampleResult = parseExampleComponent(page);
    const locale = getLocaleType(this.props);

    return (
      <div className="page page-examples">
        <Helmet title={page} />
        <div className="sidebar">
          <h2>Examples</h2>

          {cates.map((cate, index) => (
            <div className="sidebar-cate" key={`cate-${index}`}>
              <h4>{cate}</h4>
              {this.renderMenuList(cate, locale)}
            </div>
          ))}
        </div>
        <div className="content">
          <h3 className="page-title">{page}</h3>
          {exampleResult ? (
            <div className="example-wrapper">
              <div className="example-inner-wrapper">
                {this.renderResult()}
                {this.renderEditor(exampleResult)}
              </div>
              {exampleResult.exampleComponent.demoUrl ? (
                <p className="example-link-wrapper">
                  <a
                    className="example-code-sandbox-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={exampleResult.exampleComponent.demoUrl}
                  >
                    Try the demo in CodeSandbox &gt;&gt;
                  </a>
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(ExamplesView);
