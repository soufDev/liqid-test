import React from 'react';
import { UserDetailsContainer } from './UserDetailsContainer';
import { UserDetailsScreen } from './UserDetailsScreen';
import { ErrorBoundary } from '../ErrorBoundary';

export const UserDetails = () => {
    return (
        <React.Suspense fallback={<h3>Loading User Detail...</h3>}>
            <UserDetailsContainer>
                {({ user, error }) => {
                    if (error) return <h3>Error Occurs: {error.message}</h3>
                    return (
                        <ErrorBoundary centerText>
                                <UserDetailsScreen user={user} />
                        </ErrorBoundary>
                    )
                }}
            </UserDetailsContainer>
        </React.Suspense>
    )
}