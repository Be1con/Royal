import React from 'react';
import { render } from '@testing-library/react';
import Title from './Components/Title/Title';
import App from './App';

test('renders northern', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ภาคเหนือ/i);
  expect(linkElement).toBeInTheDocument();
});
