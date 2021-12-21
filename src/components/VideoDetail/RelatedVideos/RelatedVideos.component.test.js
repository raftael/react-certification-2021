import React from 'react';
import { cleanup, render as rtlRender, screen } from '@testing-library/react';
import RelatedVideos from '.';
import { VideoContextWrapper } from '../../../context/VideoContext';

afterEach(cleanup);

function render(ui, options) {
  function Wrapper(props) {
    return <VideoContextWrapper {...props} />;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

describe('Validating VideoDetail component', () => {
  beforeEach(() => {
    render(<RelatedVideos videoId="abc123" />);
  });

  test('Should exist title related videos', () => {
    expect(screen.getByText('Related Videos').toBeInTheDocument);
  });

  test('Should show loading videos text', () => {
    expect(screen.getByText('Loading videos...').toBeInTheDocument);
  });

  //   test('Should not show loading videos text', async () => {
  //     await waitFor(() => screen.getbyRole('button'));
  //     expect(screen.getByText().toBeInTheDocument);
  //   });
});
