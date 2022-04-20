import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './Dialog.component.styles';
import { useThemeContext } from '../../../../context/Theme/ThemeContext';

function SimpleDialog(props) {
  const { themeState } = useThemeContext();
  const classes = useStyles();
  const { link, darkDialog, lightDialog, darkDialogText, lightDialogText } = classes;
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className={themeState.themeDark ? darkDialog : lightDialog}>
        <DialogTitle id="simple-dialog-title">Like this video?</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className={themeState.themeDark ? darkDialogText : lightDialogText}
          >
            Please log in to be able to add this video to your favorites
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Link to="/login" className={link}>
            <Button onClick={handleClose} color="primary" autoFocus>
              Login
            </Button>
          </Link>
        </DialogActions>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default SimpleDialog;
