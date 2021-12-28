import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoDetailPage from '../../pages/VideoDetail';
import NotFound from '../../pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/watch/:videoId" component={VideoDetailPage} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
