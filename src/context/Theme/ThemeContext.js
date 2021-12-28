import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { ThemeReducer, initialState } from './ThemeReducer';

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export function ThemeContextWrapper({ children }) {
  const [themeState, themeDispatch] = useReducer(ThemeReducer, initialState);

  const contextValue = useMemo(() => {
    return { themeState, themeDispatch };
  }, [themeState, themeDispatch]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}
