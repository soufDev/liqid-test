import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

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
                    <h1>HOME</h1>
                </Route>
            </Switch>
        </Router>
    )
}