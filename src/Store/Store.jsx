// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Features/auth/AuthSlice';
import MovieReducer from '../Features/Movie/MovieSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movie:MovieReducer
    // Add other reducers if needed
  },
});
