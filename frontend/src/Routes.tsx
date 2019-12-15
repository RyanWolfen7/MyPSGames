import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GamesList from './components/GamesList/GamesList';
import GameDetails from './components/GameDetails/GameDetails';

export default () => {
  return (
    <Switch>
      <Route
        component={GamesList}
        exact
        path={'/'}
      />
      <Route
        component={GameDetails}
        exact
        path={'/:gameName/:id'}
      />
    </Switch>
  )
}
