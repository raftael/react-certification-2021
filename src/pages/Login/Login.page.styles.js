import { makeStyles } from '@material-ui/core/styles';
import { BG_DARK_APPBAR, BG_LIGHT_APPBAR } from '../../utils/constants';

const useStyles = makeStyles({
  loginSection: {
    width: '100%',
    height: '100%',
    margin: '0px',
    paddingTop: '10%',
  },
  loginH1: {
    textAlign: 'center',
    fontFamily: 'Nunito',
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    alignItems: 'center',
    width: '350px',
  },
  formGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',
  },
  formGroupStrong: {
    display: 'block',
    fontWeight: '700',
    fontSize: '1.2rem',
    marginBottom: '0.4rem',
    fontFamily: 'Nunito',
  },
  formGroupInput: {
    fontSize: '1.5rem',
    width: '100%',
    height: '60px',
    padding: '0.4rem 0.6rem',
    borderRadius: '3px',
    border: '1px solid white',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  formGroupInputDarkText: {
    color: 'white',
  },
  formGroupInputLightText: {
    color: 'black',
  },
  loginFormButton: {
    backgroundColor: BG_LIGHT_APPBAR,
    color: 'white',
    width: '6rem',
    height: '60px',
    marginTop: '1rem',
    marginBottom: '10rem',
    padding: '0.4rem 0.6rem',
    fontSize: '1.2rem',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#d3d3d3',
      color: 'black',
    },
    fontFamily: 'Nunito',
  },
  darkLoginFormButton: {
    backgroundColor: BG_DARK_APPBAR,
    color: 'white',
    width: '6rem',
    height: '60px',
    marginTop: '1rem',
    marginBottom: '10rem',
    padding: '0.4rem 0.6rem',
    fontSize: '1.2rem',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#d3d3d3',
      color: 'black',
    },
    fontFamily: 'Nunito',
  },
});

export default useStyles;
