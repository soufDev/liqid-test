import React from 'react';
import { Users } from '../Users';

export const HomeScreen = ({ users, error }) => {
    if (error) return <h3>Error Occurred: {error.message}</h3>
    return <Users nameUserList={users} />;
}