import React from 'react';
import { UserDetailsContainer } from './UserDetailsContainer';
import { UserDetailsScreen } from './UserDetailsScreen';
import { ErrorBoundary } from '../ErrorBoundary';
import { WrapperCommon } from '../WrapperCommon';
import { ErrorMessage } from '../ErrorMessage';

export const UserDetails = () => {
    return (
        <React.Suspense fallback={<h3>Loading User Detail...</h3>}>
            <UserDetailsContainer>
                {({ user, error }) => (
                    <>
                        <WrapperCommon isVisible={error}>
                            <ErrorMessage error={error} />
                        </WrapperCommon>
                        <WrapperCommon isVisible={!error}>
                            <ErrorBoundary centerText>
                                <UserDetailsScreen user={user} />
                            </ErrorBoundary>
                        </WrapperCommon>
                    </>
                )}
            </UserDetailsContainer>
        </React.Suspense>
    )
}