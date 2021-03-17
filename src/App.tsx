import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'pages/HomePage';

const App = (): JSX.Element => {
    return (
        <main>
            <Switch>
                <Route path="/" component={HomePage} exact />
            </Switch>
        </main>
    );
};

export default App;
