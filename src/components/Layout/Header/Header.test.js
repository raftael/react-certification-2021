import React from 'react';
import { cleanup, fireEvent, render as rtlRender, screen } from '@testing-library/react';
import Header from './Header.component';
import { VideoContextWrapper } from '../../../context/VideoContext';

afterEach(cleanup);

function render(ui, options) {
  function Wrapper(props) {
    return <VideoContextWrapper {...props} />;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

describe('Validating Header component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('Should exist header div', () => {
    const element = screen.getByTestId('header');
    expect(element).toBeInTheDocument();
  });

  test('Switch control changes after click', () => {
    const element = screen.getByTestId('menu-switch');
    element.click();
    fireEvent.change(element, { target: { checked: true } });
    expect(element).toHaveProperty('checked', true);
  });
});
