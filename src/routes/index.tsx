import { Redirect, Route, Switch } from 'react-router-dom';
import { IndexView, GuideView, APIView, ExamplesView, Storybook } from '../views';
import Frame from '../layouts/Frame';
import { defaultLocale } from '../utils/LocaleUtils.ts';

export type RouteParams = {
  name?: string;
};

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Redirect to={`/${defaultLocale}`} />} />
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
}
