import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { Home } from './Components';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/add">
                    <h1>Add User</h1>
                </Route>
                <Route path="/:id">
                    <h1>user ID</h1>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}