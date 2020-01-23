import React from 'react';
import { StyledWrapper } from './UserDetailsScreen.styled';
import { useLocation } from 'react-router-dom';
import { WrapperCommon } from '../WrapperCommon';

export const UserDetailsScreen = ({ children }) => {
    const { pathname } = useLocation();
    return (
        <WrapperCommon isVisible={pathname !== '/add'}>
            <StyledWrapper>{children}</StyledWrapper>
        </WrapperCommon>
    )
}
