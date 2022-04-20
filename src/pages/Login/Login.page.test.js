import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, render as rtlRender, screen } from '@testing-library/react';
import { VideoContextWrapper } from '../../context/VideoContext';
import { ThemeContextWrapper } from '../../context/Theme/ThemeContext';
import AuthProvider from '../../context/Auth/AuthContext';
import LoginPage from './Login.page';

afterEach(cleanup);

function render(ui, options) {
  function Wrapper(props) {
    return (
      <BrowserRouter>
        <AuthProvider {...props}>
          <ThemeContextWrapper {...props}>
            <VideoContextWrapper {...props} />
          </ThemeContextWrapper>
        </AuthProvider>
      </BrowserRouter>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

describe('Validating Login components', () => {
  beforeEach(() => {
    render(<LoginPage />);
  });

  test('Should exist login section', () => {
    const element = screen.getByTestId('login-section');
    expect(element).toBeInTheDocument();
  });

  test('Should exist username form section', () => {
    const element = screen.getByTestId('login-username');
    expect(element).toBeInTheDocument();
  });

  test('Should exist password form section', () => {
    const element = screen.getByTestId('login-password');
    expect(element).toBeInTheDocument();
  });
});
