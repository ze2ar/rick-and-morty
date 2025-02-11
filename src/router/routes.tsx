import { createRoutesFromElements, Navigate, Route } from 'react-router-dom';

import {
  CharacterPage,
  CharacterSearchPage,
  ErrorPage
} from '../pages';
import { Route as RouteEnum } from './route';

export const routes = createRoutesFromElements(
  <Route errorElement={<ErrorPage />}>
    <Route path="/" element={<Navigate to={RouteEnum.Characters} replace />} />
    <Route path={RouteEnum.Characters} element={<CharacterSearchPage />} />
    <Route path={RouteEnum.Character} element={<CharacterPage />} />
    <Route
      path={RouteEnum.NotFound}
      element={<ErrorPage message='Page not found' />}
    />
  </Route>
);
