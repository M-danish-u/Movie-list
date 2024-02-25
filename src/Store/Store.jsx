// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Features/auth/AuthSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers if needed
  },
});
