import React from 'react';
import { StyledButton } from '../AddUser.styled';

export const Button = ({ onClick, children, disabled }) => (
    <StyledButton type="submit" onClick={onClick} disabled={disabled}>{children}</StyledButton>
)