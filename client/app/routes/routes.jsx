import React from 'react';
import { Route } from 'react-router';
import Layout from '../layout/Layout';
import TestReactRouter from '../components/TestReactRouter';
import CommentScreen from '../components/CommentScreen';

export default (
  <Route component={Layout}>
    <Route path="/" component={CommentScreen} />
    <Route path="/test-react-router" component={TestReactRouter} />
  </Route>
);
