import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import VideoInformation from './VideoInformation/VideoInformation.component';
import useStyles from './VideoDetail.styles';
import RelatedVideos from './RelatedVideos/RelatedVideos.component';
import { useVideoContext } from '../../context/VideoContext';
import { Types } from '../../context/VideoReducer';

export default function VideoDetail({ video, isFavorite }) {
  const { state, dispatch } = useVideoContext();
  const classes = useStyles();
  const { gridRelated, grid } = classes;

  useEffect(() => {
    if (state.videoId === 0) {
      dispatch({ type: Types.WATCH_VIDEO, value: video.id });
    }
    // eslint-disable-next-line
  }, [video.id]);

  return (
    <div data-testid="react-player">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={9} className={grid}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${video.id}`}
            playing={false}
            controls
            width="100%"
            height="100%"
          />
          <VideoInformation
            videoId={video.id}
            title={video.snippet.title}
            description={video.snippet.description}
            publishedAt={video.snippet.publishedAt}
            channel={video.snippet.channelTitle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} data-testid="related-videos-grid" className={gridRelated}>
          <RelatedVideos videoId={video.id} isFavorite={isFavorite} isDetail />
        </Grid>
      </Grid>
    </div>
  );
}

VideoDetail.defaultProps = {
  isFavorite: PropTypes.bool,
};

VideoDetail.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    snippet: PropTypes.shape({
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
      channelTitle: PropTypes.string.isRequired,
    }),
  }).isRequired,
  isFavorite: PropTypes.bool,
};
