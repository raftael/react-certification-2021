import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoDetailPage from '../../pages/VideoDetail';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import { VideoContextWrapper } from '../../context/VideoContext';

function App() {
  return (
    <div data-testid="app-div">
      <VideoContextWrapper>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/watch/:videoId" component={VideoDetailPage} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </VideoContextWrapper>
    </div>
  );
}

export default App;
