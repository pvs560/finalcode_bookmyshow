import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders APP', () => {
  const { getByText } = render(<App />);
  const appHeader = getByText(/BookMyShow/i);
  expect(appHeader).toBeInTheDocument();
});
