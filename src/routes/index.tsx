import { Navigate, Route, Routes } from 'react-router-dom';
import { IndexView, GuideView, APIView, ExamplesView, Storybook } from '../views';
import Frame from '../layouts/Frame';
import { defaultLocale } from '../utils/LocaleUtils.ts';

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${defaultLocale}`} />} />
      <Route
        path="/:locale/guide/:name?"
        element={
          <Frame>
            <GuideView />
          </Frame>
        }
      />
      <Route
        path="/:locale/api/:name?"
        element={
          <Frame>
            <APIView />
          </Frame>
        }
      />
      <Route
        path="/:locale/examples/:name?"
        element={
          <Frame>
            <ExamplesView />
          </Frame>
        }
      />
      <Route
        path="/:locale/storybook"
        element={
          <Frame>
            <Storybook />
          </Frame>
        }
      />
      <Route
        path="*"
        element={
          <Frame>
            <IndexView />
          </Frame>
        }
      />
    </Routes>
  );
}
