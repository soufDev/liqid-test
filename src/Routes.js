import React from 'react';
import { 
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
`;

const Home = React.lazy(() => import('./Components/Home'));
const UserDetails = React.lazy(() => import('./Components/UserDetails'));

const AddUser = () => <h1>Add User</h1>;


export const Routes = () => {
    return (
        <React.Suspense fallback={<h1>LOADING APP ....</h1>}>
            <StyledWrapper>
                <Router>
                    <Home />
                    <Route exact path="/add">
                        <AddUser />
                    </Route>
                    <Route path="/:id">
                        <UserDetails />
                    </Route>
                </Router>
            </StyledWrapper>
        </React.Suspense>
    )
}