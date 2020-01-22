import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

test('renders learn react link', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toBeInTheDocument();
});
