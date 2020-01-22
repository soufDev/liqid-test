import React from 'react';
import { StyledWrapper, StyledUserItem } from './Users.styled';

export const Users = ({ nameUserList }) => {
    return (
        <StyledWrapper>
            {nameUserList.map((user) => <StyledUserItem key={user.id}>Name: {user.name}</StyledUserItem>)}
        </StyledWrapper>
    )
}