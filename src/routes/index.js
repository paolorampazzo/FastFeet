import { Switch } from 'react-router-dom';
import React from 'react';
import Route from './Route';

import Dashboard from '../pages/Dashboard/Encomendas';
import SignIn from '../pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" exact component={Dashboard} isPrivate />

      <Route path="/" exact component={SignIn} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
