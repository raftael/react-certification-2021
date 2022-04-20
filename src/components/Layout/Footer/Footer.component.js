import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from './Footer.component.styles';
import { useThemeContext } from '../../../context/Theme/ThemeContext';

export default function Footer() {
  const { themeState } = useThemeContext();
  const { themeDark } = themeState;
  const classes = useStyles();
  const {
    media,
    root,
    darkRoot,
    footerText,
    footerIcons,
    darkFooterIcons,
    darkFooterText,
    darkIcon,
  } = classes;

  return (
    <Card className={themeDark ? darkRoot : root}>
      <CardMedia className={media}>
        <CardContent className={themeDark ? darkFooterText : footerText}>
          <Typography variant="body2" component="p">
            Created by
            <strong> Rafael Roman</strong>
          </Typography>
        </CardContent>
      </CardMedia>
      <CardActions disableSpacing className={themeDark ? darkFooterIcons : footerIcons}>
        <a href="https://github.com/raftael" target="_blank" rel="noopener noreferrer">
          <IconButton aria-label="share">
            <GitHubIcon className={darkIcon} />
          </IconButton>
        </a>
      </CardActions>
    </Card>
  );
}
