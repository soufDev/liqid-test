import React from 'react';
import { Users } from '../Users';
import { HomeContainer } from './HomeContainer';

const items = [
    { name: "Josh", id: 1 },
    { name: "Daniel", id: 2 },
    { name: "Tom", id: 3 },
]
export const Home = () => {
    return (
        <HomeContainer>
            {({ users, isLoading, error }) => {
                if (isLoading) return <h3>Loading ...</h3>;
                if (error) return <h3>Error Occurred: {error.message}</h3>
                return <Users nameUserList={items} />
            }}
        </HomeContainer>
    )
}