export const initialState = {
  themeDark: false,
};

export const Types = {
  CHANGE_THEME: 'CHANGE_THEME',
};

export const ThemeReducer = (state, action) => {
  if (!action) return state;
  switch (action.type) {
    case Types.CHANGE_THEME:
      return {
        ...state,
        themeDark: action.value,
      };
    default:
      return state;
  }
};
