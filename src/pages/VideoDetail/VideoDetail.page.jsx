import React from 'react';
import { useParams } from 'react-router';
import Video from '../../components/VideoDetail';
import Error from '../../components/ErrorMessage';
import { DEVENV } from '../../config';
import useFetch from '../../utils/hooks/useFetch';
import YoutubeService from '../../utils/services/YoutubeService';

export default function VideoDetail() {
  const { videoId } = useParams();
  const endpoint = DEVENV ? YoutubeService.devGetVideoInfo : YoutubeService.getVideoInfo;
  const { data, loading, error } = useFetch(endpoint, videoId);

  if (error) {
    return <Error errorMessage={error} />;
  }
  return <>{loading ? <h3> Loading video Info... </h3> : <Video video={data} />}</>;
}
