export const initialState = {
  themeDark: false,
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
      // console.log(`action: SEARCH - oldValue: ${state.search} newValue: ${action.value}`);
      return {
        ...state,
        search: action.value,
      };
    case Types.WATCH_VIDEO:
      // console.log(`action: WATCH_VIDEO - oldValue: ${state.videoId} newValue: ${action.value}`);
      return {
        ...state,
        videoId: action.value,
      };
    case Types.CHANGE_THEME:
      // console.log(`action: CHANGE_THEME - oldValue: ${state.themeDark} newValue: ${action.value}`);
      return {
        ...state,
        themeDark: action.value,
      };
    default:
      return state;
  }
};
