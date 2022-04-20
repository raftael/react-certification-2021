import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, render as rtlRender, screen } from '@testing-library/react';
import { VideoContextWrapper } from '../../../context/VideoContext';
import { ThemeContextWrapper } from '../../../context/Theme/ThemeContext';
import AuthProvider from '../../../context/Auth/AuthContext';
import FavoriteButton from './FavoriteButton.component';

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

describe('Validating Favorite components', () => {
  beforeEach(() => {
    render(<FavoriteButton />);
  });

  test('Should exist favorite button section', () => {
    const element = screen.getByTestId('favorite-button-section');
    expect(element).toBeInTheDocument();
  });
});
