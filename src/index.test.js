import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.component';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Application root', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      div
    );

    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      div
    );
  });
});
