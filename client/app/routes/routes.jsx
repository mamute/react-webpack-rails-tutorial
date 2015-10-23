import React from 'react';
import { Route } from 'react-router';
import Layout from '../layout/Layout';
import TestReactRouter from '../components/TestReactRouter';
import TestReactRouterRedirect from '../components/TestReactRouterRedirect';
import CommentScreen from '../components/CommentScreen';

export default (
  <Route component={Layout}>
    <Route
      path="/"
      component={CommentScreen}
    />
    <Route
      path="/react-router"
      component={TestReactRouter}
    />
    <Route
      path="/react-router/redirect"
      component={TestReactRouterRedirect}
      onEnter={TestReactRouterRedirect.checkAuth}
    />
  </Route>
);
