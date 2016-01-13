import React, { Component } from 'react';
import Highlight from 'react-highlight';

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
