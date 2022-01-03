import React from 'react';
import { cleanup, render as rtlRender, screen } from '@testing-library/react';
import { format } from 'date-fns';
import VideoInformation from '.';
import { ThemeContextWrapper } from '../../../context/Theme/ThemeContext';
import { VideoContextWrapper } from '../../../context/VideoContext';
import AuthProvider from '../../../context/Auth/AuthContext';

afterEach(cleanup);

function render(ui, options) {
  function Wrapper(props) {
    return (
      <AuthProvider {...props}>
        <VideoContextWrapper {...props}>
          <ThemeContextWrapper {...props} />
        </VideoContextWrapper>
      </AuthProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

describe('Validating VideoInformation component', () => {
  const publishedAt = '2019-09-30T23:54:32Z';
  beforeEach(() => {
    render(
      <VideoInformation title="video title" description="video desc" publishedAt={publishedAt} />
    );
  });

  test('Should exist title', () => {
    expect(screen.getByText('video title')).toBeInTheDocument();
  });

  test('Should exist description', () => {
    expect(screen.getByText('video desc')).toBeInTheDocument();
  });

  test('Should exist publishedAt', () => {
    const date = format(new Date(publishedAt), "MMMM d',' yyyy");
    expect(screen.getByText(date)).toBeInTheDocument();
  });
});
