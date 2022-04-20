import { Types, ThemeReducer, initialState } from './ThemeReducer';

describe('video reducer', () => {
  it('should return the initial state', () => {
    expect(ThemeReducer(initialState, undefined)).toEqual(initialState);
  });

  it('should handle CHANGE_THEME', () => {
    const action = {
      type: Types.CHANGE_THEME,
      value: true,
    };
    const expectedState = {
      themeDark: true,
    };

    expect(ThemeReducer(initialState, action)).toEqual(expectedState);
  });
});
