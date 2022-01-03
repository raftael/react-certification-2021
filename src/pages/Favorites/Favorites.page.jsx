import React from 'react';
import YoutubeService from '../../utils/services/YoutubeService';
import { DEVENV } from '../../config';
import useFetch from '../../utils/hooks/useFetch';
import VideosLayout from '../../components/VideosLayout';
import storage from '../../utils/storage';
import { FAVORITE_STORAGE_KEY } from '../../utils/constants';

function Favorites() {
  const favoriteVideosIds = storage.get(FAVORITE_STORAGE_KEY);
  const endpoint = DEVENV ? YoutubeService.devGetFavoriteVideos : YoutubeService.getFavoriteVideos;
  const { data, loading, error } = useFetch(endpoint, favoriteVideosIds.join(','));

  return <VideosLayout data={data} loading={loading} error={error} isFavorite />;
}

export default Favorites;
