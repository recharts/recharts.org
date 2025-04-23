import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import _ from 'lodash';
import { IndexView, GuideView, APIView, ExamplesView, BlogView, Storybook } from '../views';
import Frame from '../layouts/Frame';
import Locale from '../locale';

const locales = Object.keys(Locale);

const hasLocale = (pathname) => {
  for (let i = 0, len = locales.length; i < len; i++) {
    if (pathname.indexOf(locales[i]) >= 0) {
      return true;
    }
  }

  return false;
};

const onEnter = (nextState, replace) => {
  const pathname = _.get(nextState, 'location.pathname', '/');

  if (!hasLocale(pathname)) {
    replace({
      pathname: `/en-US${pathname}`,
      query: _.get(nextState, 'location.query', {}),
    });
  }
};

export default () => (
  <Switch>
    <Route path="/" exact render={() => <Redirect to="/en-US" />} />
    <Route
      path="/*/guide/:name?"
      render={() => (
        <Frame>
          <GuideView />
        </Frame>
      )}
    />
    <Route
      path="/*/api/:name?"
      render={() => (
        <Frame>
          <APIView />
        </Frame>
      )}
    />
    <Route
      path="/*/examples/:name?"
      render={() => (
        <Frame>
          <ExamplesView />
        </Frame>
      )}
    />
    <Route
      path="/*/blog"
      render={() => (
        <Frame>
          <BlogView />
        </Frame>
      )}
    />
    <Route
      path="/*/storybook"
      render={() => (
        <Frame>
          <Storybook />
        </Frame>
      )}
    />
    <Route
      path="*"
      render={() => (
        <Frame>
          <IndexView />
        </Frame>
      )}
    />
  </Switch>
);
