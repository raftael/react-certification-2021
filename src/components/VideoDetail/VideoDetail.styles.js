import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  grid: {
    width: '100%',
    height: 'auto',
    maxHeight: 600,
    marginTop: 40,
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
    },
  },
  '& .MuiGrid-spacing-xs-5': {
    margin: '0px',
  },
  [theme.breakpoints.down('xs')]: {
    '& .MuiGrid-spacing-xs-5': {
      margin: '-20px',
    },
    marginTop: 10,
  },

  gridRelated: {
    marginTop: 40,
    [theme.breakpoints.down('sm')]: {
      marginTop: '190px',
      padding: '20px',
      justifyContent: 'center',
    },
  },
  loading: {
    textAlign: 'center',
  },
}));

export default useStyles;
