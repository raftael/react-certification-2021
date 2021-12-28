import { makeStyles } from '@material-ui/core/styles';
import {
  BG_DARK_LAYOUT,
  BG_LIGHT_LAYOUT,
  COLOR_DARK_TEXT,
  COLOR_LIGHT_TEXT,
} from '../../utils/constants';

const useStyles = makeStyles({
  body: {
    margin: 0,
  },
  container: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
  },
  bgLight: {
    backgroundColor: BG_LIGHT_LAYOUT,
    color: COLOR_LIGHT_TEXT,
  },
  bgDark: {
    backgroundColor: BG_DARK_LAYOUT,
    color: COLOR_DARK_TEXT,
  },
});

export default useStyles;
