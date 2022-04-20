import React from 'react';
import YoutubeService from '../../utils/services/YoutubeService';
import { DEVENV } from '../../config';
import useFetch from '../../utils/hooks/useFetch';
import VideosLayout from '../../components/VideosLayout';
import Message from '../../components/Message/Message.component';
import storage from '../../utils/storage';
import { FAVORITE_STORAGE_KEY } from '../../utils/constants';

function Favorites() {
  const favoriteVideosIds = storage.get(FAVORITE_STORAGE_KEY);
  const endpoint = DEVENV ? YoutubeService.devGetFavoriteVideos : YoutubeService.getFavoriteVideos;
  const { data, loading, error } = useFetch(
    endpoint,
    favoriteVideosIds ? favoriteVideosIds.join(',') : ''
  );

  return favoriteVideosIds ? (
    <VideosLayout data={data} loading={loading} error={error} isFavorite />
  ) : (
    // eslint-disable-next-line react/no-unescaped-entities
    <Message message="You don't have favorite videos" />
  );
}

export default Favorites;
