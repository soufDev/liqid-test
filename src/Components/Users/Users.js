import React from 'react';
import { StyledWrapper, StyledUserItem } from './Users.styled';
import { ErrorBoundary } from '../ErrorBoundary';

export const Users = ({ nameUserList, onClick }) => {
    return (
        <StyledWrapper data-testid="users-block">
            {nameUserList.map((user) => (
                <ErrorBoundary key={user.id}>
                    <StyledUserItem key={user.id} data-testid="username-item" onClick={() => onClick(user.id)}>
                        Name: {user.name}
                    </StyledUserItem>
                </ErrorBoundary>
            ))}
        </StyledWrapper>
    )
}