import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import useStyles from './Header.styles';
import { Types as videoTypes } from '../../../context/VideoReducer';
import { Types as themeTypes } from '../../../context/Theme/ThemeReducer';
import { useVideoContext } from '../../../context/VideoContext';
import { useThemeContext } from '../../../context/Theme/ThemeContext';

export default function Header() {
  const classes = useStyles();
  const {
    grow,
    bgDark,
    bgLight,
    menuButton,
    search,
    searchIcon,
    inputInput,
    inputRoot,
    sectionDesktop,
    sectionMobile,
  } = classes;
  const { dispatch } = useVideoContext();
  const { themeState, themeDispatch } = useThemeContext();
  const [query, setQuery] = useState(null);

  const handleChangeTheme = (e) => {
    themeDispatch({ type: themeTypes.CHANGE_THEME, value: e.target.checked });
  };
  const handleClickSearch = (e) => {
    e.preventDefault();
    if (query && query !== '') dispatch({ type: videoTypes.SEARCH, value: query });
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <div className={grow} data-testid="header">
      <AppBar position="static" className={themeState.themeDark ? bgDark : bgLight}>
        <Toolbar>
          <IconButton edge="start" className={menuButton} color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <div className={search}>
            <form type="submit" onSubmit={handleClickSearch}>
              <div
                className={searchIcon}
                onClick={handleClickSearch}
                onKeyDown={handleClickSearch}
                role="button"
                tabIndex={0}
              >
                <SearchIcon />
              </div>

              <InputBase
                placeholder="Search..."
                classes={{
                  root: inputRoot,
                  input: inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
          </div>
          <div className={grow} />
          <div className={sectionDesktop}>
            <FormControlLabel
              control={
                <Switch
                  checked={themeState.themeDark}
                  onChange={handleChangeTheme}
                  name="checked"
                  color="primary"
                  data-testid="menu-switch"
                />
              }
              label="Dark mode"
            />
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
