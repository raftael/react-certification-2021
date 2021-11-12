import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Welcome to the challenge!')).toBeInTheDocument();
});
