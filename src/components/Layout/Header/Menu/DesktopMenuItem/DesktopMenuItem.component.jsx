import React from 'react';
import PropTypes from 'prop-types';
import MenuItemMui from '@material-ui/core/MenuItem';
import { ListItemIcon, ListItemText, Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './DesktopMenuItem.component.styles';
import { useThemeContext } from '../../../../../context/Theme/ThemeContext';
import { useAuth } from '../../../../../context/Auth/AuthContext';
import 'material-icons/iconfont/material-icons.css';

export const DesktopMenuItem = React.forwardRef((props, ref) => {
  const { route, iconName, menuName } = props.menu;
  const { authenticated } = useAuth();
  const { themeState } = useThemeContext();
  const classes = useStyles();
  const { link, darkMenu, lightMenu, menuIcon } = classes;

  const handleClick = () => {
    props.close(null);
  };

  const menu =
    !authenticated && menuName === 'Favorites' ? (
      ''
    ) : (
      <Link to={route} className={link} ref={ref} onClick={handleClick}>
        <MenuItemMui className={themeState.themeDark ? darkMenu : lightMenu}>
          <ListItemIcon>
            <Icon className={menuIcon}>{iconName}</Icon>
          </ListItemIcon>
          <ListItemText primary={menuName} />
        </MenuItemMui>
      </Link>
    );
  return menu;
});

DesktopMenuItem.defaultProps = {
  menu: PropTypes.object,
};

DesktopMenuItem.propTypes = {
  menu: PropTypes.shape({
    route: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    menuName: PropTypes.string.isRequired,
  }),
  close: PropTypes.func.isRequired,
};

export default DesktopMenuItem;
