import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { VideoReducer, initialState } from './VideoReducer';

const VideoContext = createContext();

// eslint-disable-next-line react/prop-types
export function VideoContextWrapper({ children }) {
  const [state, dispatch] = useReducer(VideoReducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <VideoContext.Provider value={contextValue}>{children}</VideoContext.Provider>;
}

export function useVideoContext() {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error('useVideoContext must be used within a VideoProvider');
  }
  return context;
}
