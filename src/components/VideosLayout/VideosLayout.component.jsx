import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Loader from 'react-loader-spinner';
import VideoCard from '../Card';
import Error from '../ErrorMessage';
import useStyles from './VideosLayout.styles';

function VideosLayout(props) {
  const { data, loading, error, isFavorite } = props;
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
            <Grid item xs={12} sm={6} md={3} key={video.etag}>
              <VideoCard
                id={isFavorite ? video.id : video.id.videoId}
                title={video.snippet.title}
                image={video.snippet.thumbnails.medium.url}
                description={video.snippet.description}
                isDetailPage={false}
                data-testid="video-card"
                isFavorite={isFavorite}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

VideosLayout.defaultProps = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.objectOf(PropTypes.object),
  isFavorite: PropTypes.bool,
};

VideosLayout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.objectOf(PropTypes.object),
  isFavorite: PropTypes.bool,
};

export default VideosLayout;
