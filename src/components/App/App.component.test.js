import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

describe('Validating App component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders Layout component', () => {
    const element = screen.getByTestId('app-div');
    expect(element).toBeInTheDocument();
  });
});
