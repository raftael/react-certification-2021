import { makeStyles } from '@material-ui/core/styles';
import {
  BG_DARK_DIALOG,
  BG_LIGHT_DIALOG,
  COLOR_DARK_TEXT,
  COLOR_LIGHT_TEXT,
} from '../../../../utils/constants';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  darkDialog: {
    backgroundColor: BG_DARK_DIALOG,
    color: COLOR_DARK_TEXT,
  },
  lightDialog: {
    backgroundColor: BG_LIGHT_DIALOG,
    color: COLOR_LIGHT_TEXT,
  },
  lightDialogText: {
    color: COLOR_LIGHT_TEXT,
  },
  darkDialogText: {
    color: COLOR_DARK_TEXT,
  },
});

export default useStyles;
