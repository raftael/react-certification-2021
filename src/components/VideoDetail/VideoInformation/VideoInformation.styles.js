import { makeStyles } from '@material-ui/core/styles';
import {
  COLOR_DARK_TEXT_CARD_DETAIL,
  COLOR_LIGHT_TEXT_CARD_DETAIL,
  BG_DARK_CARD_DETAIL,
  BG_LIGHT_CARD_DETAIL,
} from '../../../utils/constants';

const useStyles = makeStyles((theme) => ({
  darkAccordion: {
    backgroundColor: BG_DARK_CARD_DETAIL,
    color: COLOR_DARK_TEXT_CARD_DETAIL,
  },
  lightAccordion: {
    backgroundColor: BG_LIGHT_CARD_DETAIL,
    color: COLOR_LIGHT_TEXT_CARD_DETAIL,
  },
  cardSize: {
    maxWidth: 345,
    height: 350,
  },
  detailSize: {
    maxWidth: '100%',
    height: '100%',
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
  },
  showMoreInfo: {
    textAlign: 'right',
    color: 'gray',
  },
  expandIcon: {
    color: 'gray',
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '50%',
  },
  helper: {
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  favorite: {
    flexDirection: 'row-reverse',
  },
  favoriteDarkIcon: {
    color: 'gray',
  },
  favoriteRedIcon: {
    color: 'red',
  },
}));

export default useStyles;
