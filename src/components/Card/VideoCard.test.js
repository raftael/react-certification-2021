import React from 'react';
import { cleanup, render as rtlRender, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoCard from './VideoCard.component';
import { VideoContextWrapper } from '../../context/VideoContext';
import { ThemeContextWrapper } from '../../context/Theme/ThemeContext';

afterEach(cleanup);

function render(ui, options) {
  function Wrapper(props) {
    return (
      <BrowserRouter>
        <ThemeContextWrapper {...props}>
          <VideoContextWrapper {...props} />
        </ThemeContextWrapper>
      </BrowserRouter>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

describe('Validating VideoCard component', () => {
  test('Should exist video-card div', () => {
    render(
      <VideoCard
        id="123"
        title="demo"
        image="demo.jpg"
        description="test description"
        isDetailPage={false}
        isFavorite={false}
      />
    );
    const element = screen.getByTestId('card');
    expect(element).toBeInTheDocument();
  });

  test('Validating description is not in home page', () => {
    render(
      <VideoCard
        id="123"
        title="demo"
        image="demo.jpg"
        description="test description"
        isDetailPage={false}
        isFavorite={false}
      />
    );
    expect(screen.getByText('demo')).toBeInTheDocument();
    expect(screen.getByText('test description')).toBeInTheDocument();
  });

  test('Validating description is not in detail page', () => {
    render(
      <VideoCard
        id="123"
        title="demo"
        image="demo.jpg"
        description="test description"
        isDetailPage
        isFavorite={false}
      />
    );
    expect(screen.getByText('demo')).not.toBe(0);
    const element = screen.queryByTestId('video-card-desc');
    expect(element).toBeNull();
  });
});
