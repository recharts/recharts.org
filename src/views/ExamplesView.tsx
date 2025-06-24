/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { PureComponent, ReactNode } from 'react';
import Helmet from 'react-helmet';
import { Runner } from 'react-runner';
import * as ReactScope from 'react';
import * as RechartsScope from 'recharts';
import * as D3ShapeScope from 'd3-shape';
import { Editor } from '@monaco-editor/react';
import { Link } from 'react-router';
import Examples from '../docs/exampleComponents';
import { getLocaleType } from '../utils/LocaleUtils.ts';
import './ExampleView.scss';
import fetchFile from '../utils/fetchUtils.ts';
import 'simple-line-icons/scss/simple-line-icons.scss';
import { RouteComponentProps, withRouter } from '../routes/withRouter.tsx';

// @ts-ignore
const cates = Object.keys(Examples).sort((a, b) => Examples[a].order - Examples[b].order);

type ExampleComponent = {
  cateName: string;
  exampleName: string;
  exampleComponent: any;
};

const parseExampleComponent = (compName: string): ExampleComponent | null => {
  const typeList = Object.keys(Examples);
  const res = typeList.filter((key) => {
    // @ts-ignore
    const entry = Examples[key];

    return !!entry.examples[compName];
  });

  if (res && res.length) {
    return {
      cateName: res[0],
      exampleName: compName,
      // @ts-ignore
      exampleComponent: Examples[res[0]].examples[compName],
    };
  }
  return null;
};

const EXAMPLE_CODE_CACHE: Record<string, string> = {};

type ExamplesViewProps = RouteComponentProps;

type ExamplesViewState = {
  isLoading: boolean | null;
  hasError: boolean | null;
  exampleCode: string | null;
  prevPage: string | null;
};

class ExamplesView extends PureComponent<ExamplesViewProps, ExamplesViewState> {
  state: ExamplesViewState = {
    isLoading: null,
    hasError: null,
    exampleCode: null,
    prevPage: null,
  };

  editorRef = React.createRef();

  errorRetryAttempts = 0;

  static getDerivedStateFromProps(nextProps: ExamplesViewProps, prevState: ExamplesViewState) {
    const { params } = nextProps;
    const page = params?.name;
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

  componentDidUpdate(_prevProps: ExamplesViewProps, prevState: ExamplesViewState) {
    const page = this.getPage();

    if (prevState.prevPage !== page) {
      // page change
      const exampleResult = parseExampleComponent(page);

      if (exampleResult) {
        this.fetchExampleCode(exampleResult.cateName, exampleResult.exampleName);
      }
    }
  }

  fetchExampleCode = (cateName: string, exampleName: string) => {
    /*
     * This class is structured such that an error in fetching the code will send it toAdd commentMore actions
     * an infinite loop of retries, which will eventually either crash your browser or
     * get you banned from GitHub.
     * So let's limit the number of retries to something reasonable.
     */
    if (this.errorRetryAttempts > 3) {
      this.setState({
        isLoading: false,
        hasError: true,
        exampleCode: null,
      });
      return;
    }

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
    if (this.editorRef.current) {
      this.setState({
        // @ts-ignore
        exampleCode: this.editorRef.current.getValue(),
      });
    }
  };

  renderMenuList(type: string, locale: string) {
    const page = this.getPage();
    // @ts-ignore
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

  renderEditor(exampleResult: ExampleComponent) {
    const { isLoading, hasError, exampleCode } = this.state;
    let editorValue = '';

    if (isLoading === true) {
      editorValue = 'loading code ....';
    } else if (isLoading === false && hasError === true) {
      editorValue = 'loading code error';
    } else if (isLoading === false && hasError === false) {
      // @ts-ignore
      editorValue = exampleCode;
      // Why is this setting state to exampleCode which it read from the state just few lines above?
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
              // @ts-ignore
              // noinspection JSConstantReassignment
              this.editorRef.current = editor;
            }}
          />
        </div>
      </div>
    ) : null;
  }

  renderResult(): ReactNode {
    const scope = {
      // scope used by import statement in editor
      import: {
        react: ReactScope,
        recharts: RechartsScope,
        'd3-shape': D3ShapeScope,
      },
    };

    if (this.state.exampleCode == null) {
      return null;
    }

    return (
      <div className="example-chart-wrapper">
        <div className="example-chart-responsive-container">
          <Runner code={this.state.exampleCode} scope={scope} />
        </div>
      </div>
    );
  }

  getPage(): string {
    const { params } = this.props;
    const page = params?.name ?? 'SimpleLineChart';
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
