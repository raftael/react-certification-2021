import { alpha, makeStyles } from '@material-ui/core/styles';
import { BG_DARK_APPBAR, BG_LIGHT_APPBAR } from '../../../utils/constants';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginRight: '5px',
    },
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '5px',
      width: '180px',
    },
    textDecoration: 'none',
    color: 'white',
  },
  themeIcon: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  formControlSwitch: {
    [theme.breakpoints.down('xs')]: {
      marginRight: '0',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1.5),
    height: '100%',
    position: 'absolute',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      color: '#d3d3d3',
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    zIndex: 999,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    // display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    // display: 'flex',
    // [theme.breakpoints.up('md')]: {
    //   display: 'none',
    // },
  },
  palette: {
    type: 'dark',
  },
  bgDark: {
    backgroundColor: BG_DARK_APPBAR,
  },
  bgLight: {
    backgroundColor: BG_LIGHT_APPBAR,
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
}));

export default useStyles;
