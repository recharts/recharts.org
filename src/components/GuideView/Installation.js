import React, { Component } from 'react';
import Highlight from 'utils/Highlight';
import { localeGet } from '../../utils/LocaleUtils';

const Installation = ({ locale }) => (
  <div className="mod-installation" id="Installation">
    <h3>{localeGet(locale, 'installation', 'installation')}</h3>
    <h4>NPM</h4>
    <p>
      {localeGet(locale, 'installation', 'npm-desc')}
      <a href="http://webpack.github.io/" target="_blank" rel="external">Webpack</a>
      {localeGet(locale, 'installation', 'dot')}
    </p>
    <Highlight className="sh">
    {
      `  # latest stable
  $ npm install recharts`
    }
    </Highlight>
    <h4>UMD</h4>
    <p>
      {localeGet(locale, 'installation', 'umd-desc')}
      &nbsp;(&nbsp;<a href="https://unpkg.com/" target="_blank">unpkg</a>&nbsp;)&nbsp;
      &nbsp;:
    </p>
    <Highlight className="html">
    {
`  <script src="https://unpkg.com/recharts/umd/Recharts.min.js"></script>`
    }
    </Highlight>
    <p>{localeGet(locale, 'installation', 'umd-use')}<code>window.Recharts</code></p>
    <h4>{localeGet(locale, 'installation', 'dev-build')}</h4>
    <Highlight className="sh">
    {`  $ git clone https://github.com/recharts/recharts.git
  $ cd recharts
  $ npm install
  $ npm run build`}
    </Highlight>
  </div>
);

export default Installation;
