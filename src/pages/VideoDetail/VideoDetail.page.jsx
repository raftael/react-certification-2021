import React from 'react';
import { useParams } from 'react-router';
import Loader from 'react-loader-spinner';
import Video from '../../components/VideoDetail';
import Error from '../../components/ErrorMessage';
import { DEVENV } from '../../config';
import useFetch from '../../utils/hooks/useFetch';
import YoutubeService from '../../utils/services/YoutubeService';
import useStyles from './VideoDetail.page.styles';

export default function VideoDetail() {
  const { videoId } = useParams();
  const classes = useStyles();
  const endpoint = DEVENV ? YoutubeService.devGetVideoInfo : YoutubeService.getVideoInfo;
  const { data, loading, error } = useFetch(endpoint, videoId);

  if (error) {
    return <Error errorMessage={error} />;
  }
  return (
    <>
      {loading ? (
        <div className={classes.loading} data-testid="video-loader">
          <Loader type="Bars" color="gray" height={50} width={50} timeout={3000} />
        </div>
      ) : (
        <Video video={data} />
      )}
    </>
  );
}
