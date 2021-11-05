import React from 'react';

import './Layout.styles.css';
import Header from './Header/Header.component'

function Layout({ children }) {
  return (
    <>
      <Header/>
      <main className="container">{children}</main>;
    </>
  )
  
}

export default Layout;
