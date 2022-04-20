import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoDetailPage from '../../pages/VideoDetail';
import NotFound from '../../pages/NotFound';
import LoginPage from '../../pages/Login';
import Private from '../Private';
import Favorites from '../../pages/Favorites';
import FavoriteDetail from '../../pages/FavoriteDetail/FavoriteDetail.page';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/watch/:videoId" component={VideoDetailPage} />
      <Route exact path="/login" component={LoginPage} />
      <Private exact path="/favorites">
        <Favorites />
      </Private>
      <Private exact path="/favorites/:videoId">
        <FavoriteDetail />
      </Private>
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
