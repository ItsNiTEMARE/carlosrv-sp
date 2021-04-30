import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import ScholarPage from 'pages/ScholarPage';
import SWEPage from 'pages/SWEPage';
import GamerPage from 'pages/GamerPage';

const App = (): JSX.Element => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const history = useHistory();

  useEffect(() => {
    return history.listen(() => {
      if (isFirstLoad) setIsFirstLoad(false);
    });
  }, [history, isFirstLoad]);

  return (
    <main>
      <Switch>
        <Route exact path="/carlosrv-sp">
          <HomePage isFirstLoad={isFirstLoad} />
        </Route>
        <Route path="/carlosrv-sp/scholar" component={ScholarPage} />
        <Route path="/carlosrv-sp/swe" component={SWEPage} />
        <Route path="/carlosrv-sp/gamer" component={GamerPage} />
      </Switch>
    </main>
  );
};

export default App;
