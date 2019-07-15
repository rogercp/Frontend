/**
 * Dependencies
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Landing } from '../views/index';
import uuid from 'uuid';

/**
 * Define router
 */

const RootRouter = [
  <Route key={uuid.v4()} exact path="/" component={Landing} />,
  <Route key={uuid.v4()} path="/signin" render={() => <Redirect to="/users/login" />} />,
  <Route key={uuid.v4()} path="/login" render={() => <Redirect to="/users/login" />} />,
  <Route key={uuid.v4()} path="/signup" render={() => <Redirect to="/users/login" />} />,
  <Route key={uuid.v4()} path="/register" render={() => <Redirect to="/users/login" />} />,
];

/**
 * Export router
 */

export default RootRouter;
