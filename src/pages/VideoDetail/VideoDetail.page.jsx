import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import VideoDetailLayout from '../../components/VideoDetailLayout';
import { DEVENV } from '../../config';
import useFetch from '../../utils/hooks/useFetch';
import YoutubeService from '../../utils/services/YoutubeService';
import { useVideoContext } from '../../context/VideoContext';
import { Types } from '../../context/VideoReducer';

export default function VideoDetail() {
  const { videoId } = useParams();
  const { state, dispatch } = useVideoContext();

  useEffect(() => {
    if (videoId !== state.videoId) {
      dispatch({ type: Types.WATCH_VIDEO, value: videoId });
    }
  });

  const endpoint = DEVENV ? YoutubeService.devGetVideoInfo : YoutubeService.getVideoInfo;
  const { data, loading, error } = useFetch(endpoint, videoId);
  return (
    <VideoDetailLayout
      data={data}
      loading={loading}
      error={error}
      isFavorite={false}
      key={videoId}
    />
  );
}
