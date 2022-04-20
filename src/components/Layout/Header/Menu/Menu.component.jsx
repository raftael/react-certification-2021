import React from 'react';
import Menu from '@material-ui/core/Menu';
import DesktopMenuItem from './DesktopMenuItem';
import { menuItems } from '../../../../config';
import useStyles from './Menu.styles';
import { useThemeContext } from '../../../../context/Theme/ThemeContext';

export default function MenuBar(props) {
  const classes = useStyles();
  const { themeState } = useThemeContext();
  const { menu, darkMenu } = classes;
  const { menuId, anchorEl, handleProfileMenuClose } = props;

  const handleMenuClose = () => {
    handleProfileMenuClose(!anchorEl);
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
      {menuItems.map((item) => (
        <DesktopMenuItem
          menu={item}
          key={item.menuName}
          ref={React.createRef()}
          close={handleProfileMenuClose}
          anchorEl={anchorEl}
        />
      ))}
    </Menu>
  );

  return renderMenu;
}
