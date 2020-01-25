import React from 'react';
import { useField } from 'formik';
import { StyledWrapperInput, StyledInput, StyledError } from '../AddUser.styled';
import { WrapperCommon } from '../../WrapperCommon';

export const Input = (props) => {
    const [field, meta] = useField(props);
    const error = meta.touched && meta.error;
    return (
        <StyledWrapperInput data-testid='input-item'>
            <StyledInput {...field} {...props} error={error} />
            <WrapperCommon isVisible={error}>
                <StyledError data-testid="error-message">{meta.error}</StyledError>
            </WrapperCommon>
        </StyledWrapperInput>
    )
}