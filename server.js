const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

const webpackDevOptions = {
  noInfo: true,
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

app.use(require('webpack-dev-middleware')(compiler, webpackDevOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  const reqPath = req.path;
  if (reqPath) {
    const exampleUrlExec = /^(\/examples)\/([a-zA-Z]+)\/([a-zA-Z]+)(.js)$/.exec(reqPath);

    if (exampleUrlExec) {
      const cateName = exampleUrlExec[2];
      const fileName = exampleUrlExec[3];

      res.sendFile(path.join(__dirname, `src/docs/exampleComponents/${cateName}/${fileName}.js`));

      return;
    }
  }

  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8787, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8787');
});
