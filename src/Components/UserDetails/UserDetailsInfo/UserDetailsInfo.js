import React from 'react';
import { StyledItemInfo } from '../UserDetailsScreen.styled';

export const UserDetailsInfo = ({ user }) => {
    return (
        <>
            <StyledItemInfo>
                <strong>ID:</strong> {user.id}
            </StyledItemInfo>
            <StyledItemInfo>
                <strong>Name:</strong> {user.name}
            </StyledItemInfo>
            <StyledItemInfo>
                <strong>Username:</strong> {user.username}
            </StyledItemInfo>
            <StyledItemInfo>
                <strong>Email:</strong> {user.email}
            </StyledItemInfo>
            <StyledItemInfo>
                <strong>Phone:</strong> <a href={`tel:${user.phone}`}>{user.phone}</a>
            </StyledItemInfo>
            <StyledItemInfo>
                <strong>website:</strong> <a href={user.website} target="_blank" rel="noopener noreferrer">{user.website}</a>
            </StyledItemInfo>
        </>
    )
}