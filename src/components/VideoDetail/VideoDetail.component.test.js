import React from 'react';
import { cleanup, render as rtlRender, screen } from '@testing-library/react';
import VideoDetail from '.';
import { VideoContextWrapper } from '../../context/VideoContext';
import { ThemeContextWrapper } from '../../context/Theme/ThemeContext';

afterEach(cleanup);

function render(ui, options) {
  function Wrapper(props) {
    return (
      <ThemeContextWrapper {...props}>
        <VideoContextWrapper {...props} />
      </ThemeContextWrapper>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

describe('Validating VideoDetail component', () => {
  const publishedAt = '2019-09-30T23:54:32Z';
  const video = {
    id: 'abc123',
    snippet: {
      title: 'video title',
      description: 'video desc',
      publishedAt,
    },
  };

  beforeEach(() => {
    render(<VideoDetail video={video} />);
  });

  test('Should exist react player', () => {
    expect(screen.getByTestId('react-player').toBeInTheDocument);
  });
});
