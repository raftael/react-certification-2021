import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useYoutube from '../../utils/hooks/useYoutube';
import VideoCard from '../../components/Card';
import Error from '../../components/ErrorMessage';
import useStyles from './Home.styles';

function HomePage() {
  const { data, errorMessage } = useYoutube();
  const classes = useStyles();
  if (errorMessage) {
    return <Error errorMessage={errorMessage} />;
  }
  return (
    <>
      <Typography gutterBottom variant="h2" component="div" className={classes.title}>
        Welcome to the challenge!
      </Typography>
      <Grid container spacing={4}>
        {data.map((video) => (
          <Grid item xs={6} md={3} key={video.etag}>
            <VideoCard
              title={video.snippet.title}
              image={video.snippet.thumbnails.medium.url}
              description={video.snippet.description}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default HomePage;
