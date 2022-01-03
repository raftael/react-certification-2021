import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import SunIcon from '@material-ui/icons/WbSunny';
import MoonIcon from '@material-ui/icons/Brightness2';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import useStyles from './Header.styles';
import { Types as videoTypes } from '../../../context/VideoReducer';
import { Types as themeTypes } from '../../../context/Theme/ThemeReducer';
import { useVideoContext } from '../../../context/VideoContext';
import { useThemeContext } from '../../../context/Theme/ThemeContext';
import { useAuth } from '../../../context/Auth/AuthContext';
import Menu from './Menu';
import MenuProfile from './MenuProfile';

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
    link,
    themeIcon,
    formControlSwitch,
  } = classes;
  const history = useHistory();
  const { authenticated } = useAuth();
  const { dispatch } = useVideoContext();
  const { themeState, themeDispatch } = useThemeContext();
  const [query, setQuery] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElProfile, setAnchorElProfile] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChangeTheme = (e) => {
    themeDispatch({ type: themeTypes.CHANGE_THEME, value: e.target.checked });
  };
  const handleClickSearch = (e) => {
    e.preventDefault();
    if (query && query !== '') dispatch({ type: videoTypes.SEARCH, value: query });
    history.push('/');
  };

  const menuDesktopId = 'primary-search-menu';
  const menuProfileId = 'primary-search-profile-menu';

  return (
    <div className={grow} data-testid="header">
      <AppBar position="static" className={themeState.themeDark ? bgDark : bgLight}>
        <Toolbar>
          <IconButton edge="start" className={menuButton} color="inherit" aria-label="open drawer">
            <Link to="/">
              <OndemandVideoIcon className={link} />
            </Link>
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
              className={formControlSwitch}
              control={
                <>
                  {!themeState.themeDark ? (
                    <MoonIcon className={themeIcon} />
                  ) : (
                    <SunIcon className={themeIcon} />
                  )}
                  <Switch
                    checked={themeState.themeDark}
                    onChange={handleChangeTheme}
                    name="checked"
                    color="primary"
                    data-testid="menu-switch"
                  />
                </>
              }
            />
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuDesktopId}
              aria-haspopup="true"
              color="inherit"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuProfileId}
              aria-haspopup="true"
              color="inherit"
              onClick={handleProfileMenuOpen}
            >
              {authenticated ? (
                <Avatar alt="Rafael Roman" src="/static/profile_small.png" />
              ) : (
                <AccountCircle />
              )}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Menu anchorEl={anchorEl} menuId={menuDesktopId} handleProfileMenuClose={setAnchorEl} />
      <MenuProfile
        anchorEl={anchorElProfile}
        menuId={menuProfileId}
        handleProfileMenuClose={setAnchorElProfile}
      />
    </div>
  );
}
