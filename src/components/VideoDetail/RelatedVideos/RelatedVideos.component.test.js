import React from 'react';
import { cleanup, render as rtlRender, screen } from '@testing-library/react';
import RelatedVideos from '.';
import { VideoContextWrapper } from '../../../context/VideoContext';
import { ThemeContextWrapper } from '../../../context/Theme/ThemeContext';
import AuthProvider from '../../../context/Auth/AuthContext';

afterEach(cleanup);

function render(ui, options) {
  function Wrapper(props) {
    return (
      <AuthProvider {...props}>
        <ThemeContextWrapper {...props}>
          <VideoContextWrapper {...props} />
        </ThemeContextWrapper>
      </AuthProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

describe('Validating loading', () => {
  beforeEach(() => {
    render(<RelatedVideos videoId="abc123" isFavorite={false} />);
  });

  test('Should exist title related videos', () => {
    expect(screen.getByText('Related Videos').toBeInTheDocument);
  });

  test('Should show loading videos text', () => {
    expect(screen.getByTestId('loader').toBeInTheDocument);
  });
});
