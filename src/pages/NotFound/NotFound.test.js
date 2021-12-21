import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './NotFound.page';

describe('Validating Not Found page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Switch>
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  });

  test('Should exist not-found div', () => {
    const container = screen.getByTestId('not-found');
    expect(container).toBeInTheDocument();
  });

  test('Validating elements', () => {
    const container = screen.getByTestId('not-found');
    expect(container.textContent).toBe('home');
  });
});
