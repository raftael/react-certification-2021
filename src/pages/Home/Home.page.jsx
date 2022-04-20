import React from 'react';
import useFetch from '../../utils/hooks/useFetch';
import YoutubeService from '../../utils/services/YoutubeService';
import { DEVENV } from '../../config';
import VideosLayout from '../../components/VideosLayout';
import { useVideoContext } from '../../context/VideoContext';

function HomePage() {
  const { state } = useVideoContext();
  const endpoint = DEVENV ? YoutubeService.devSearch : YoutubeService.search;
  const { data, loading, error } = useFetch(endpoint, state.search);

  return <VideosLayout data={data} loading={loading} error={error} isFavorite={false} />;
}

export default HomePage;
