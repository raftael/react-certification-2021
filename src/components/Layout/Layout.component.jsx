import React from 'react';
import Header from './Header/Header.component';
import useStyles from './Layout.styles';

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
