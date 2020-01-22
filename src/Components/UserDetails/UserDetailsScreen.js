import React from 'react';
import { StyledWrapper, StyledTitle, StyledContainerInfo, StyledItemInfo } from './UserDetailsScreen.styled';

export const UserDetailsScreen = ({ user }) => {
    return (
        <StyledWrapper>
            <StyledTitle>Details</StyledTitle>
            <StyledContainerInfo>
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
                    <strong>Phone:</strong> {user.phone}
                </StyledItemInfo>
                <StyledItemInfo>
                    <strong>website:</strong> {user.website}
                </StyledItemInfo>
            </StyledContainerInfo>
        </StyledWrapper>
    )
}