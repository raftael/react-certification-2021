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
import { useThemeContext } from '../../context/Theme/ThemeContext';
import { Types } from '../../context/VideoReducer';

export default function VideoCard(props) {
  const classes = useStyles();
  const { link, detailSize, cardSize, cardContent, bgDark, bgLight, textDescription } = classes;
  const { dispatch } = useVideoContext();
  const { themeState } = useThemeContext();
  const { id, title, image, description, isDetailPage = false, isFavorite = false } = props;
  const url = isFavorite ? 'favorites' : 'watch';

  const handleWatchVideo = () => {
    dispatch({ type: Types.WATCH_VIDEO, value: id });
  };

  return (
    <>
      <Link to={`/${url}/${id}`} onClick={handleWatchVideo} className={link}>
        <Card
          className={`${isDetailPage ? detailSize : cardSize} ${
            themeState.themeDark ? bgDark : bgLight
          }`}
          data-testid="card"
        >
          <CardActionArea>
            <CardMedia component="img" alt={title} height="140" image={image} title={title} />
            <CardContent className={cardContent}>
              <Typography gutterBottom variant={isDetailPage ? 'subtitle2' : 'h6'} component="p">
                {parse(title)}
              </Typography>
              {!isDetailPage ? (
                <Typography
                  variant="body2"
                  className={textDescription}
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
  isFavorite: PropTypes.bool,
};

VideoCard.propTypes = {
  isDetailPage: PropTypes.bool,
  isFavorite: PropTypes.bool,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
