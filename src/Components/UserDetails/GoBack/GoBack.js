import React from 'react';
import { GoBackContainer } from './GoBackContainer';
import { WrapperCommon } from '../../WrapperCommon';
import { StyledGoBack } from './GoBack.styled';


export const GoBack = () => {
    return (
        <GoBackContainer>
            {({ isVisible, onClick }) => (
                <WrapperCommon isVisible={isVisible}>
                    <StyledGoBack onClick={onClick}>{`< Back To Contacts`}</StyledGoBack>
                </WrapperCommon>
            )}
        </GoBackContainer>
    )
}