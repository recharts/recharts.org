import React, { Component } from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import { IndexView, GuideView, APIView, ExamplesView, BlogView } from 'views';
import Frame from 'layouts/Frame';

export default (
  <Route path="/" component={Frame}>
    <IndexRoute component={IndexView} />
    <Route path="/guide(/:name)" component={GuideView} />
    <Route path="/api(/:name)" component={APIView} />
    <Route path="/examples(/:name)" component={ExamplesView} />
    <Route path="/blog" component={BlogView} />
    <Route path="*" component={IndexView} />
  </Route>
);
