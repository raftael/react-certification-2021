import { makeStyles } from '@material-ui/core/styles';
import {
  BG_DARK_CARD,
  BG_LIGHT_CARD,
  COLOR_DARK_TEXT,
  COLOR_LIGHT_TEXT,
} from '../../utils/constants';

const useStyles = makeStyles((theme) => ({
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
    marginTop: '10px',
  },
  darkTextDescription: {
    color: 'white',
    marginTop: '10px',
  },
  titleCard: {
    fontFamily: 'Nunito',
  },
  channelName: {
    marginTop: '5px',
    display: 'inline',
    fontFamily: 'Nunito',
  },
  avatar: {
    backgroundColor: 'orange',
    marginRight: '10px',
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: '12px',
  },
  avatarContainer: {
    display: 'flex',
  },
}));

export default useStyles;
