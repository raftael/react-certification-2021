import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Video from '../VideoDetail';
import Error from '../ErrorMessage';
import useStyles from './VideoDetailLayout.styles';

export default function VideoDetailLayout(props) {
  const { data, loading, error, isFavorite } = props;
  const classes = useStyles();

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
        <Video video={data} isFavorite={isFavorite} />
      )}
    </>
  );
}

VideoDetailLayout.defaultProps = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.objectOf(PropTypes.object),
  isFavorite: PropTypes.bool,
};

VideoDetailLayout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.objectOf(PropTypes.object),
  isFavorite: PropTypes.bool,
};
