import React from 'react';
import { cleanup, render as rtlRender, screen } from '@testing-library/react';
import VideoDetail from '.';
import { VideoContextWrapper } from '../../context/VideoContext';

afterEach(cleanup);

function render(ui, options) {
  function Wrapper(props) {
    return <VideoContextWrapper {...props} />;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

describe('Validating Video Detail component', () => {
  beforeEach(() => {
    const video = {
      id: 'nmXMgqjQzls',
      snippet: {
        title: 'title',
        description: 'description',
        publishedAt: '2019-09-30T23:54:32Z',
      },
    };
    render(<VideoDetail video={video} />);
  });

  test('renders related videos component', () => {
    const element = screen.getByTestId('related-videos-grid');
    expect(element).toBeInTheDocument();
  });
});
