import React from 'react';
import { render } from '@testing-library/react';
import { HomeScreen } from './HomeScreen';

test('should render without Crashing', () => {
    const { container } = render(<HomeScreen error={null} users={[]} />);
    expect(container.firstChild).toBeInTheDocument();
});

test('should render error block', () => {
    const error = new Error('server error')
    const { getByText } = render(<HomeScreen error={error} users={[]} />);
    expect(getByText(/Error Occurred/)).toBeInTheDocument();
})

test('should render Users Block', () => {
    const { getByTestId } = render(<HomeScreen error={null} users={[]}/>);
    expect(getByTestId(/users-block/)).toBeInTheDocument();
});
