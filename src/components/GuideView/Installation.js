import React, { Component } from 'react';
import Highlight from 'utils/Highlight';

const Installation = () => {
  return (
    <div className="mod-installation" id="Installation">
      <h3>Installation</h3>
      <h4>NPM</h4>
      <p>NPM is the recommended installation method when building SPA. It pairs nicely with a CommonJS module bundler such as <a href="http://webpack.github.io/" target="_blank" rel="external">Webpack</a>. </p>
      <Highlight className="sh">
      {`  # latest stable
  $ npm install recharts`}
      </Highlight>
      <h4>UMD</h4>
      <p>The UMD build is also available on <a href="https://npmcdn.com/" target="_blank">npmcdn</a>:</p>
      <Highlight className="html">
{`  <script src="https://npmcdn.com/recharts/umd/Recharts.min.js"></script>`}
      </Highlight>
      <p>You can find the library on <code>window.Recharts</code></p>
      <h4>Dev Build</h4>
      <Highlight className="sh">
      {`  $ git clone https://github.com/recharts/recharts.git
  $ cd recharts
  $ npm install
  $ npm run build`}
      </Highlight>
    </div>
  );
}

export default Installation;
