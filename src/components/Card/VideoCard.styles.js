import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
});

export default useStyles;
