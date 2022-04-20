export const APIKEY = process.env.REACT_APP_APIKEY;
export const DEVENV = process.env.REACT_APP_DEVENV;

export const menuItems = [
  { route: '/', menuName: 'Home', iconName: 'home', isPrivate: false },
  { route: '/favorites', menuName: 'Favorites', iconName: 'favorite', isPrivate: true },
];
