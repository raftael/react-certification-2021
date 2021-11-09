import React from 'react';
// import './Layout.styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header/Header.component';

const useStyles = makeStyles(() => ({
  container: {
    flexGrow: 1,
  },
}));

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
