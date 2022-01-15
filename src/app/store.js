import { configureStore } from '@reduxjs/toolkit';
import agentReducer from '../features/agentSlice';

export const store = configureStore({
  reducer: {
    agent: agentReducer,
  },
});
