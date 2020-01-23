import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { GoBack } from './GoBack';

test('should goBack element not be visible', () => {
  const { queryByText } = render(
        <Router>
            <GoBack />
        </Router>
    );
    expect(queryByText(/< Back To Contacts/)).toBe(null);
});
