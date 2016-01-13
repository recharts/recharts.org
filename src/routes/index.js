import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import { IndexView, GuideView, APIView, ExamplesView, BlogView } from 'views';
import Frame from 'layouts/Frame';

export default (
  <Route path="/" component={Frame}>
    <IndexRoute component={IndexView} />
    <Route path="/guide" component={GuideView} />
    <Route path="/api" component={APIView} />
    <Route path="/examples" component={ExamplesView} />
    <Route path="/blog" component={BlogView} />
    <Route path="*" component={IndexView} />
  </Route>
);
