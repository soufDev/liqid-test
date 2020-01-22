import React from 'react';
import { render } from '@testing-library/react';
import { UserDetailsScreen } from './UserDetailsScreen';
import { ErrorBoundary } from '../ErrorBoundary';

const user = {
    id: 1,
    name: 'John Doe',
    username: 'john.doe',
    email: 'john.doe@example.com',
    phone: '343-3434-122',
    website: 'www.website.com'
};

const Tree = ({ user }) => (
    <ErrorBoundary>
        <UserDetailsScreen user={user} />
    </ErrorBoundary>
)

test('should render withoud crashing', () => { 
    const { getByText } = render(<UserDetailsScreen user={user} /> )
    expect(getByText('Details')).toBeInTheDocument();
});

test('should render all the details element', () => {
    const { getByText } = render(<UserDetailsScreen user={user} />);
    expect(getByText(user.id.toString())).toBeInTheDocument();
    expect(getByText(user.name)).toBeInTheDocument();
    expect(getByText(user.username)).toBeInTheDocument();
    expect(getByText(user.email)).toBeInTheDocument();
    expect(getByText(user.phone)).toBeInTheDocument();
    expect(getByText(user.website)).toBeInTheDocument();
});

// I'm not a big fan but we have to handle this test even tough we have a console error

test('should render the Error Boudary message for null or empty user object', () => {
    const { getByText, rerender } = render(<Tree user={null} />);
    expect(getByText('Something went wrong...')).toBeInTheDocument();
    rerender(<Tree user={{}} />);
    expect(getByText('Something went wrong...')).toBeInTheDocument();
})