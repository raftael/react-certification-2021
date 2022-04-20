import { makeStyles } from '@material-ui/core/styles';
import {
  BG_DARK_FOOTER_MAIN,
  BG_DARK_FOOTER_SECONDARY,
  BG_LIGHT_FOOTER_MAIN,
  BG_LIGHT_FOOTER_SECONDARY,
  LIGHT_ICON,
  DARK_ICON,
} from '../../../utils/constants';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    paddingTop: '5%',
    marginTop: '50px',
    backgroundColor: BG_LIGHT_FOOTER_MAIN,
  },
  darkRoot: {
    width: '100%',
    paddingTop: '5%',
    marginTop: '50px',
    backgroundColor: BG_DARK_FOOTER_MAIN,
  },
  media: {
    height: '150px',
    paddingTop: '5%', // 16:9
    textAlign: 'center',
  },
  footerText: {
    textAlign: 'center',
    backgroundColor: BG_LIGHT_FOOTER_MAIN,
    color: 'black',
  },
  darkFooterText: {
    textAlign: 'center',
    backgroundColor: BG_DARK_FOOTER_MAIN,
    color: 'white',
  },
  footerIcons: {
    backgroundColor: BG_LIGHT_FOOTER_SECONDARY,
    justifyContent: 'center',
  },
  darkFooterIcons: {
    backgroundColor: BG_DARK_FOOTER_SECONDARY,
    justifyContent: 'center',
    color: 'white',
  },
  icon: {
    color: LIGHT_ICON,
  },
  darkIcon: {
    color: DARK_ICON,
  },
}));

export default useStyles;
