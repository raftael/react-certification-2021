import { Types, VideoReducer, initialState } from './VideoReducer';

describe('video reducer', () => {
  it('should return the initial state', () => {
    expect(VideoReducer(initialState, undefined)).toEqual(initialState);
  });

  it('should handle SEARCH', () => {
    const action = {
      type: Types.SEARCH,
      value: 'reactjs',
    };
    const expectedState = {
      themeDark: false,
      search: 'reactjs',
      videoId: 0,
    };

    expect(VideoReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle WATCH_VIDEO', () => {
    const action = {
      type: Types.WATCH_VIDEO,
      value: '123abc',
    };
    const expectedState = {
      themeDark: false,
      search: 'wizeline',
      videoId: '123abc',
    };

    expect(VideoReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_THEME', () => {
    const action = {
      type: Types.CHANGE_THEME,
      value: true,
    };
    const expectedState = {
      themeDark: true,
      search: 'wizeline',
      videoId: 0,
    };

    expect(VideoReducer(initialState, action)).toEqual(expectedState);
  });
});
