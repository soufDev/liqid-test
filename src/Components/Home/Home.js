import React from 'react';
import { HomeContainer } from './HomeContainer';
import { WrapperCommon } from '../WrapperCommon';
import { HomeScreen } from './HomeScreen';

export const Home = () => {
    return (
        <React.Suspense fallback={<h3>Loading...</h3>}>
            <HomeContainer>
                {({ users, error, isVisible }) => (
                    <WrapperCommon isVisible={isVisible}>
                        <HomeScreen users={users} error={error} />
                    </WrapperCommon>
                )}
            </HomeContainer>
        </React.Suspense>
    )
}