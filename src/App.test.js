import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render test', () => {
  const { getByText } = render(<App />);
  const allElement = getByText(/test/i);
  expect(allElement).toBeInTheDocument();
});
