import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import parse from 'html-react-parser';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { format } from 'date-fns';
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
  } = classes;
  const { themeState } = useThemeContext();
  const { title, description, publishedAt } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <CardContent>
        <Typography gutterBottom variant="h6" component="p">
          {parse(title)}
        </Typography>
        <Divider />
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
    </>
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
