import { makeStyles } from '@material-ui/core/styles';
import {
  BG_DARK_DIALOG,
  BG_LIGHT_DIALOG,
  COLOR_DARK_TEXT,
  COLOR_LIGHT_TEXT,
  BG_LIGHT_APPBAR,
} from '../../../../utils/constants';

const useStyles = makeStyles(() => ({
  menu: {
    '& .MuiPaper-root': {
      backgroundColor: BG_LIGHT_DIALOG,
    },
  },
  darkMenu: {
    '& .MuiPaper-root': {
      backgroundColor: BG_DARK_DIALOG,
    },
  },
  link: {
    textDecoration: 'none',
  },
  darkMenuItem: {
    backgroundColor: BG_DARK_DIALOG,
    color: COLOR_DARK_TEXT,
    '&:hover': {
      color: 'gray',
      backgroundColor: BG_DARK_DIALOG,
    },
  },
  lightMenuItem: {
    backgroundColor: BG_LIGHT_DIALOG,
    color: COLOR_LIGHT_TEXT,
    '&:hover': {
      color: BG_LIGHT_APPBAR,
    },
  },
  menuIcon: {
    color: 'gray',
  },
}));

export default useStyles;
