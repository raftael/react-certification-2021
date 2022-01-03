import { makeStyles } from '@material-ui/core/styles';
import {
  BG_DARK_CARD,
  BG_LIGHT_CARD,
  COLOR_DARK_TEXT,
  COLOR_LIGHT_TEXT,
} from '../../utils/constants';

const useStyles = makeStyles({
  title: {
    padding: 30,
    textAlign: 'center',
  },
  grid: {
    marginTop: 40,
    marginBottom: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
  loader: {
    width: '100%',
    height: 'auto',
    marginTop: 150,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  cardSize: {
    maxWidth: 345,
    height: 350,
  },
  detailSize: {
    maxWidth: '90%',
    height: '100%',
    marginBottom: 15,
  },
  link: {
    textDecoration: 'none',
  },
  cardContent: {
    height: '100%',
  },
  bgDark: {
    backgroundColor: BG_DARK_CARD,
    color: COLOR_DARK_TEXT,
  },
  bgLight: {
    backgroundColor: BG_LIGHT_CARD,
    color: COLOR_LIGHT_TEXT,
  },
  textDescription: {
    color: 'gray',
  },
});

export default useStyles;
