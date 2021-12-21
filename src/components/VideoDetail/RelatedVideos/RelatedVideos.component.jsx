import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import VideoCard from '../../Card/VideoCard.component';
import Error from '../../ErrorMessage';
import useFetch from '../../../utils/hooks/useFetch';
import YoutubeService from '../../../utils/services/YoutubeService';
import { DEVENV } from '../../../config';

export default function RelatedVideos({ videoId }) {
  const endpoint = DEVENV ? YoutubeService.devSearch : YoutubeService.getRelatedVideos;
  const { data, loading, error } = useFetch(endpoint, videoId);

  if (error) {
    return <Error errorMessage={error} />;
  }

  return (
    <>
      <Typography gutterBottom component="div" data-testid="title">
        Related Videos
      </Typography>

      {loading ? (
        <p>Loading videos... </p>
      ) : (
        data.map((video) => (
          <Grid item xs={12} md={12} key={video.etag}>
            <VideoCard
              id={video.id.videoId}
              title={video.snippet.title}
              image={video.snippet.thumbnails.medium.url}
              description={video.snippet.description}
              isDetail={false}
              data-testid="videocard"
              isDetailPage
            />
          </Grid>
        ))
      )}
    </>
  );
}

RelatedVideos.propTypes = {
  videoId: PropTypes.string.isRequired,
};
