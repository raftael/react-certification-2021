import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default function MenuBarMobile(props) {
  const onChange = (event) => {
    props.handleChange(event);
  };

  const handleProfileMenu = (event) => {
    props.handleProfileMenuOpen(event);
  };

  const isMobileMenuOpen = Boolean(props.mobileMoreAnchorEl);
  const renderMobileMenu = (
    <Menu
      anchorEl={props.mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={props.mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={props.handleMobileMenuClose}
    >
      <MenuItem>
        <FormControlLabel
          control={
            <Switch checked={props.checked} onChange={onChange} name="checked" color="primary" />
          }
          label="Dark mode"
        />
      </MenuItem>
      <MenuItem onClick={handleProfileMenu}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return renderMobileMenu;
}
