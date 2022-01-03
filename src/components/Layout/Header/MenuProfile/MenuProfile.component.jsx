import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import { useThemeContext } from '../../../../context/Theme/ThemeContext';
import { useAuth } from '../../../../context/Auth/AuthContext';
import useStyles from './MenuProfile.component.styles';

export default function MenuBar(props) {
  const history = useHistory();
  const { themeState } = useThemeContext();
  const { authenticated, logout } = useAuth();
  const { menuId, anchorEl, handleProfileMenuClose } = props;
  const classes = useStyles();
  const { link, darkMenuItem, lightMenuItem, menuIcon, darkMenu, menu } = classes;

  const handleMenuClose = () => {
    handleProfileMenuClose(!anchorEl);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    handleProfileMenuClose(!anchorEl);
    history.push('/');
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      data-testid="menu"
      className={themeState.themeDark ? darkMenu : menu}
    >
      {authenticated ? (
        <Link to="/" className={link}>
          <MenuItem
            onClick={handleLogout}
            className={themeState.themeDark ? darkMenuItem : lightMenuItem}
          >
            <ListItemIcon>
              <ExitToAppIcon className={menuIcon} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </MenuItem>
        </Link>
      ) : (
        <Link to="/login" className={link}>
          <MenuItem
            onClick={handleMenuClose}
            className={themeState.themeDark ? darkMenuItem : lightMenuItem}
          >
            <ListItemIcon>
              <PersonIcon className={menuIcon} />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </MenuItem>
        </Link>
      )}
    </Menu>
  );

  return renderMenu;
}
