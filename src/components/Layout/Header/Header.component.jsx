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
import { Types } from '../../../context/VideoReducer';
import { useVideoContext } from '../../../context/VideoContext';

export default function Header() {
  const classes = useStyles();
  const { state, dispatch } = useVideoContext();
  const [query, setQuery] = useState(null);

  const handleChangeTheme = (e) => {
    dispatch({ type: Types.CHANGE_THEME, value: e.target.checked });
  };
  const handleClickSearch = (e) => {
    e.preventDefault();
    if (query && query !== '') dispatch({ type: Types.SEARCH, value: query });
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <div className={classes.grow} data-testid="header">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.search}>
            <div
              className={classes.searchIcon}
              onClick={handleClickSearch}
              onKeyDown={handleClickSearch}
              role="button"
              tabIndex={0}
            >
              <SearchIcon />
            </div>

            <InputBase
              placeholder="Wizeline…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <FormControlLabel
              control={
                <Switch
                  checked={state.themeDark}
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
          <div className={classes.sectionMobile}>
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
