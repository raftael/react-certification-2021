import { makeStyles } from '@material-ui/core/styles';
import { BG_DARK_DIALOG, BG_LIGHT_DIALOG } from '../../../../utils/constants';

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
}));

export default useStyles;
