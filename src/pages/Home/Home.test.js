import React from 'react';
import { cleanup, render as rtlRender } from '@testing-library/react';
import Home from './Home.page';
import { VideoContextWrapper } from '../../context/VideoContext';

afterEach(cleanup);

function render(ui, options) {
  function Wrapper(props) {
    return <VideoContextWrapper {...props} />;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

describe('Validating Home page', () => {
  let getByTestId;
  beforeEach(() => {
    ({ getByTestId } = render(<Home />));
  });

  test('Should exist loading container div', () => {
    expect(getByTestId('loading-div')).toBeInTheDocument();
  });
});
