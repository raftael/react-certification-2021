import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Routes from '../Routes';
import { VideoContextWrapper } from '../../context/VideoContext';
import { ThemeContextWrapper } from '../../context/Theme/ThemeContext';
import AuthProvider from '../../context/Auth/AuthContext';

function App() {
  return (
    <div data-testid="app-div">
      <BrowserRouter>
        <AuthProvider>
          <ThemeContextWrapper>
            <VideoContextWrapper>
              <Layout>
                <Routes />
              </Layout>
            </VideoContextWrapper>
          </ThemeContextWrapper>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
