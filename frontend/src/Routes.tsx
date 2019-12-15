import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GamesList from './components/GamesList/GamesList';

export default () => {
  return (
    <Switch>
      <Route
        component={GamesList}
        exact
        path={'/'}
      />
      <Route
        exact
        path={'/game/:id'}
      />
    </Switch>
  )
}
