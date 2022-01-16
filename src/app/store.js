import { configureStore } from '@reduxjs/toolkit';
import agentReducer from '../features/agentSlice';
import lineupReducer from '../features/lineupSlice';

export const store = configureStore({
  reducer: {
    agent: agentReducer,
    lineup: lineupReducer
  },
});
