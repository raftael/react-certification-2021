import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './Message.component.styles';

export default function Message(props) {
  const classes = useStyles();
  const { message } = props;
  return (
    <div data-testid="error-message">
      <h2 className={classes.msg}>{message}</h2>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};
