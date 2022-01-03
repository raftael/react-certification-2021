import React from 'react';
import { useParams } from 'react-router';
import VideoDetailLayout from '../../components/VideoDetailLayout';
import { DEVENV } from '../../config';
import useFetch from '../../utils/hooks/useFetch';
import YoutubeService from '../../utils/services/YoutubeService';

export default function VideoDetail() {
  const { videoId } = useParams();
  const endpoint = DEVENV ? YoutubeService.devGetVideoInfo : YoutubeService.getVideoInfo;
  const { data, loading, error } = useFetch(endpoint, videoId);

  return <VideoDetailLayout data={data} loading={loading} error={error} isFavorite={false} />;
}
