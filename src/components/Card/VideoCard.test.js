import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard.component';

describe('Validating VideoCard component', () => {
  beforeEach(() => {
    render(<VideoCard title="demo" image="demo.jpg" description="test description" />);
  });

  test('Should exist video-card div', () => {
    const element = screen.getByTestId('video-card');
    expect(element).toBeInTheDocument();
  });

  test('Validating props', () => {
    expect(screen.getByText('demo')).toBeInTheDocument();
    expect(screen.getByText('test description')).toBeInTheDocument();
  });
});
