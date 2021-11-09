import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useYoutube from '../../utils/hooks/useYoutube';
import VideoCard from '../../components/Card';

const useStyles = makeStyles({
  title: {
    padding: 30,
    textAlign: 'center',
  },
});

function HomePage() {
  const { videosList, errorMessage } = useYoutube();
  const classes = useStyles();
  if (errorMessage) {
    return (
      <div>
        <h2>
          Error:
          {errorMessage}
        </h2>
      </div>
    );
  }
  return (
    <>
      <Typography gutterBottom variant="h2" component="div" className={classes.title}>
        Welcome to the challenge!
      </Typography>
      <Grid container spacing={4}>
        {videosList.map((video) => (
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
