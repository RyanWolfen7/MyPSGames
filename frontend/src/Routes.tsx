import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default () => {
  return (
    <Switch>
      <Route
        exact
        path={'/'}
      />
    </Switch>
  )
}
