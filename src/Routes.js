import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { Home, UserDetails } from './Components';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
`;

export const Routes = () => {
    return (
        <StyledWrapper>
            <Router>
                <Home />
                <Switch>
                    <Route path="/:id">
                        <UserDetails />
                    </Route>
                </Switch>
            </Router>
        </StyledWrapper>
    )
}