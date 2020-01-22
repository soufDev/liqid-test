import React from 'react';
import { UserDetailsScreen } from './UserDetailsScreen';
import { Title } from './Title';
import { StyledWrapperInfo } from './UserDetailsScreen.styled';
import UserImage from './UserImage';
import UserDetailsInfo from './UserDetailsInfo';

export const UserDetails = () => {
    return (
        <UserDetailsScreen>
            <Title text="Details" />
            <StyledWrapperInfo>
                <UserImage />
                <UserDetailsInfo />
            </StyledWrapperInfo>
        </UserDetailsScreen>
    )
}