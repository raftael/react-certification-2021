import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import VideoInformation from './VideoInformation/VideoInformation.component';
import useStyles from './VideoDetail.styles';
import RelatedVideos from './RelatedVideos/RelatedVideos.component';

export default function VideoDetail({ video }) {
  const classes = useStyles();

  return (
    <div data-testid="react-player">
      <Grid container spacing={3}>
        <Grid item xs={9} className={classes.grid}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${video.id}`}
            playing={false}
            controls
            width="100%"
            height="650px"
          />
          <VideoInformation
            title={video.snippet.title}
            description={video.snippet.description}
            publishedAt={video.snippet.publishedAt}
          />
        </Grid>
        <Grid item xs={3} data-testid="related-videos-grid">
          <RelatedVideos videoId={video.id} />
        </Grid>
      </Grid>
    </div>
  );
}

VideoDetail.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    snippet: PropTypes.shape({
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
