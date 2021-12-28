import React from 'react';
import Header from './Header/Header.component';
import useStyles from './Layout.styles';
import { useThemeContext } from '../../context/Theme/ThemeContext';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const classes = useStyles();
  const { container, bgDark, bgLight } = classes;
  const { themeState } = useThemeContext();

  return (
    <div className={`${container} ${themeState.themeDark ? bgDark : bgLight}`}>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
