import React from 'react';
import { HomeContainer } from './HomeContainer';
import { WrapperCommon } from '../WrapperCommon';
import {  Users } from '../Users';
import { ErrorMessage } from '../ErrorMessage';

export const Home = () => {
    return (
        <React.Suspense fallback={<h3>Loading...</h3>}>
            <HomeContainer>
                {({ users, error, isVisible, goToDetails }) => (
                    <WrapperCommon isVisible={isVisible}>
                        <WrapperCommon isVisible={error}>
                            <ErrorMessage error={error}/>
                        </WrapperCommon>
                        <WrapperCommon isVisible={!error}>
                            <Users nameUserList={users} onClick={goToDetails} />
                        </WrapperCommon>
                    </WrapperCommon>
                )}
            </HomeContainer>
        </React.Suspense>
    )
}