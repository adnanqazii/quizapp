import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hello', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders placeholder', () => {
  const respose = render(<App />);
  const linkElement = respose.getByPlaceholderText(/email/i);
  expect(linkElement).toBeInTheDocument();
});
