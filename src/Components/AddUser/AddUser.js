import React from 'react';
import { fetcher } from '../../api';
import { useHistory } from 'react-router-dom';
import { AddUserForm } from './AddUserForm';
import { StyledContainer } from './AddUser.styled';

export const AddUser = () => {
    const [error, setError] = React.useState(null);
    const history = useHistory();
    const onSubmit = (values) => {
        fetcher.add('/users', values)
            .then(() => history.push('/'))
            .catch((e) => setError(e));
    }
    return (
        <StyledContainer>
            <AddUserForm onSubmit={onSubmit} error={error} />
        </StyledContainer>
    )
}