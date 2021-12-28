import React from 'react';
import Grid from '@material-ui/core/Grid';
import Loader from 'react-loader-spinner';
import useFetch from '../../utils/hooks/useFetch';
import YoutubeService from '../../utils/services/YoutubeService';
import { DEVENV } from '../../config';
import VideoCard from '../../components/Card';
import Error from '../../components/ErrorMessage';
import useStyles from './Home.styles';
import { useVideoContext } from '../../context/VideoContext';

function HomePage() {
  const { state } = useVideoContext();
  const endpoint = DEVENV ? YoutubeService.devSearch : YoutubeService.search;
  const { data, loading, error } = useFetch(endpoint, state.search);
  const classes = useStyles();
  const { loader, grid } = classes;

  if (error) {
    return <Error errorMessage={error} />;
  }
  return (
    <>
      {loading ? (
        <div data-testid="loading-div" className={loader}>
          <Loader type="Bars" color="gray" height={120} width={120} timeout={3000} />
        </div>
      ) : (
        <Grid container spacing={4} data-testid="grid-container" className={grid}>
          {data.map((video) => (
            <Grid item xs={6} md={3} key={video.etag}>
              <VideoCard
                id={video.id.videoId}
                title={video.snippet.title}
                image={video.snippet.thumbnails.medium.url}
                description={video.snippet.description}
                isDetailPage={false}
                data-testid="video-card"
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default HomePage;
