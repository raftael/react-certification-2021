import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage.component';

describe('Validating VideoCard component', () => {
  const message = 'Houston we have a problem';
  beforeEach(() => {
    render(<ErrorMessage errorMessage={message} />);
  });

  test('Should exist error-message div', () => {
    const element = screen.getByTestId('error-message');
    expect(element).toBeInTheDocument();
  });

  test('Validating props', () => {
    const element = screen.getByTestId('error-message');
    expect(element.textContent).toBe(`Error:${message}`);
  });
});
