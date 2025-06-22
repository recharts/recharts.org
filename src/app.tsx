/* eslint-disable import/no-unresolved */
import ReactDOM from 'react-dom';
import { loader } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
// @ts-ignore
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
// @ts-ignore
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
// @ts-ignore
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
// @ts-ignore
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
// @ts-ignore
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import Root from './containers/Root.tsx';

// eslint-disable-next-line no-restricted-globals
self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new JsonWorker();
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new CssWorker();
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new HtmlWorker();
    }
    if (label === 'typescript' || label === 'javascript') {
      return new TsWorker();
    }
    return new EditorWorker();
  },
};

loader.config({ monaco });

loader.init().then(/* ... */);

ReactDOM.render(<Root />, document.getElementById('app'));
