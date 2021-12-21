import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Header from './Header.component';

describe('Validating Header component', () => {
  test('Should exist header div', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header')).toBeInTheDocument();
  });

  test('Switch control changes after click', () => {
    const { getByTestId } = render(<Header />);
    getByTestId('menu-switch').click();
    fireEvent.change(getByTestId('menu-switch'), { target: { checked: true } });
    expect(getByTestId('menu-switch')).toHaveProperty('checked', true);
  });
});
