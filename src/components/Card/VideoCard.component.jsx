import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import parse from 'html-react-parser';
import useStyles from './VideoCard.styles';
import { useVideoContext } from '../../context/VideoContext';
import { Types } from '../../context/VideoReducer';

export default function VideoCard(props) {
  const classes = useStyles();
  const { dispatch } = useVideoContext();
  const { id, title, image, description, isDetailPage = false } = props;

  const handleWatchVideo = () => {
    dispatch({ type: Types.WATCH_VIDEO, value: id });
  };

  return (
    <>
      <Link to={`/watch/${id}`} onClick={handleWatchVideo} className={classes.link}>
        <Card className={isDetailPage ? classes.detailSize : classes.cardSize} data-testid="card">
          <CardActionArea>
            <CardMedia component="img" alt={title} height="140" image={image} title={title} />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant={isDetailPage ? 'subtitle2' : 'h6'} component="p">
                {parse(title)}
              </Typography>
              {!isDetailPage ? (
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  data-testid="video-card-desc"
                >
                  {description}
                </Typography>
              ) : (
                ''
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
}

VideoCard.defaultProps = {
  isDetailPage: PropTypes.bool,
};

VideoCard.propTypes = {
  isDetailPage: PropTypes.bool,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
