import React from 'react';
import Loader from 'react-loader-spinner';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import VideoCard from '../../Card/VideoCard.component';
import Error from '../../ErrorMessage';
import useFetch from '../../../utils/hooks/useFetch';
import YoutubeService from '../../../utils/services/YoutubeService';
import { DEVENV } from '../../../config';
import useStyles from '../VideoDetail.styles';

export default function RelatedVideos({ videoId }) {
  const endpoint = DEVENV ? YoutubeService.devSearch : YoutubeService.getRelatedVideos;
  const { data, loading, error } = useFetch(endpoint, videoId);
  const classes = useStyles();
  const { loader } = classes;

  if (error) {
    return <Error errorMessage={error} />;
  }

  return (
    <>
      <Typography gutterBottom component="div" data-testid="title">
        Related Videos
      </Typography>

      {loading ? (
        <div className={loader} data-testid="loader">
          <Loader type="Bars" color="gray" height={50} width={50} timeout={3000} />
        </div>
      ) : (
        data.map((video) => (
          <div data-testid="grid-videocard" key={video.etag}>
            <Grid item xs={12} md={12} key={video.etag}>
              <VideoCard
                id={video.id.videoId}
                title={video.snippet.title}
                image={video.snippet.thumbnails.medium.url}
                description={video.snippet.description}
                isDetail={false}
                isDetailPage
              />
            </Grid>
          </div>
        ))
      )}
    </>
  );
}

RelatedVideos.propTypes = {
  videoId: PropTypes.string.isRequired,
};
