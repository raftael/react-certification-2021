import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home.page';

describe('Validating Home page', () => {
  test('Should exist title div', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('title')).toBeInTheDocument();
  });

  test('Should exist grid container div', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('grid-container')).toBeInTheDocument();
  });

  test('Should exist videocard div', () => {
    const { getByTestId } = render(<Home />);
    setTimeout(() => {
      expect(getByTestId('videocard')).toBeInTheDocument();
    }, 300);
  });
});
