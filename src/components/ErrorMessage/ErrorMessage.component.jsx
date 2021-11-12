import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorMessage(props) {
  const { errorMessage } = props;
  return (
    <div data-testid="error-message">
      <h2>
        Error:
        {errorMessage}
      </h2>
    </div>
  );
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
