import React from 'react';
import { StyledWrapper, StyledUserItem } from './Users.styled';
import { ErrorBoundary } from '../ErrorBoundary';

export const Users = ({ nameUserList }) => {
    return (
        <StyledWrapper data-testid="users-block">
            {nameUserList.map((user) => (
                <ErrorBoundary>
                    <StyledUserItem key={user.id} data-testid="username-item">
                        Name: {user.name}
                    </StyledUserItem>
                </ErrorBoundary>
            ))}
        </StyledWrapper>
    )
}