import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Routes from '../Routes';
import { VideoContextWrapper } from '../../context/VideoContext';
import { ThemeContextWrapper } from '../../context/Theme/ThemeContext';

function App() {
  return (
    <div data-testid="app-div">
      <BrowserRouter>
        <ThemeContextWrapper>
          <VideoContextWrapper>
            <Layout>
              <Routes />
            </Layout>
          </VideoContextWrapper>
        </ThemeContextWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
