import React from 'react';
import { StyledImg } from '../UserDetailsScreen.styled';

export const UserImage = ({ url, title }) => <StyledImg src={url} alt={title} />;