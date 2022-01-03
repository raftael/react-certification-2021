export const initialState = {
  search: 'wizeline',
  videoId: 0,
};

export const Types = {
  SEARCH: 'SEARCH',
  WATCH_VIDEO: 'WATCH_VIDEO',
  CHANGE_THEME: 'CHANGE_THEME',
};

export const VideoReducer = (state, action) => {
  if (!action) return state;
  switch (action.type) {
    case Types.SEARCH:
      return {
        ...state,
        search: action.value,
      };
    case Types.WATCH_VIDEO:
      return {
        ...state,
        videoId: action.value,
      };
    default:
      return state;
  }
};
