import React from 'react';
import { cleanup, render as rtlRender, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VideoDetailPage from './VideoDetail.page';
import { VideoContextWrapper } from '../../context/VideoContext';
import { ThemeContextWrapper } from '../../context/Theme/ThemeContext';

afterEach(cleanup);

function render(ui, options) {
  function Wrapper(props) {
    return (
      <MemoryRouter>
        <ThemeContextWrapper {...props}>
          <VideoContextWrapper {...props} />
        </ThemeContextWrapper>
      </MemoryRouter>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

describe('Validating VideoDetailPage', () => {
  beforeEach(() => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: jest.fn().mockReturnValue({ environment: 'dev', service: 'fakeService' }),
    }));
    render(<VideoDetailPage />);
  });

  test('Should exist loader div', () => {
    const element = screen.getByTestId('video-loader');
    expect(element).toBeInTheDocument();
  });
});
