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
import useStyles from './VideoInformation.styles';

export default function VideoInformation(props) {
  const classes = useStyles();
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
        <div className={classes.root}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  {format(new Date(publishedAt), "MMMM d',' yyyy")}
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>Show more info...</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
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
