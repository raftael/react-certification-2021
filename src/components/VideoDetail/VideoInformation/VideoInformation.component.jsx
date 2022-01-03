import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import parse from 'html-react-parser';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { format } from 'date-fns';
import FavoriteButton from '../FavoriteButton';
import { useThemeContext } from '../../../context/Theme/ThemeContext';
import useStyles from './VideoInformation.styles';

export default function VideoInformation(props) {
  const classes = useStyles();
  const {
    root,
    darkAccordion,
    lightAccordion,
    expandIcon,
    column,
    secondaryHeading,
    showMoreInfo,
    details,
    favorite,
  } = classes;
  const { themeState } = useThemeContext();
  const { title, description, publishedAt } = props;

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={themeState.themeDark ? darkAccordion : lightAccordion}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="p">
          {parse(title)}
        </Typography>
        <Divider />
        <CardActions disableSpacing className={favorite}>
          <FavoriteButton />
        </CardActions>
        <div className={root}>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
            className={themeState.themeDark ? darkAccordion : lightAccordion}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={expandIcon} />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={column}>
                <Typography className={secondaryHeading}>
                  {format(new Date(publishedAt), "MMMM d',' yyyy")}
                </Typography>
              </div>
              <div className={column}>
                <Typography className={`${secondaryHeading} ${showMoreInfo}`}>
                  {expanded ? 'Show less info...' : 'Show more info...'}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={details}>
              <Typography>{description}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </CardContent>
    </div>
  );
}

VideoInformation.defaultProps = {
  publishedAt: PropTypes.string,
};

VideoInformation.propTypes = {
  publishedAt: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
