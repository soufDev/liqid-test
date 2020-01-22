import React from 'react';
import { Users } from '../Users';
import { HomeContainer } from './HomeContainer';

export const Home = () => {
    return (
        <React.Suspense fallback={<h3>Loading...</h3>}>
            <HomeContainer>
                {({ users, error }) => {
                    if (error) return <h3>Error Occurred: {error.message}</h3>
                    return <Users nameUserList={users} />
                }}
            </HomeContainer>
        </React.Suspense>
    )
}