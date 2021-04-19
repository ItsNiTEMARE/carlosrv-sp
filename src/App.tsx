import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import ScholarPage from 'pages/ScholarPage';
import SWEPage from 'pages/SWEPage';

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
        <Route exact path="/">
          <HomePage isFirstLoad={isFirstLoad} />
        </Route>
        <Route path="/scholar" component={ScholarPage} />
        <Route path="/swe" component={SWEPage} />
      </Switch>
    </main>
  );
};

export default App;
