// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], // Change 'user' to 'users' to store an array
  isAuthenticated: false,
 
  // Add any other relevant state properties
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Assuming action.payload is an array of users
      state.users.push(action.payload)

      // Save user data to local storage
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    logout: (state) => {
      state.users = [];
      state.isAuthenticated = false;

      // Remove user data from local storage
      localStorage.removeItem('users');
      localStorage.removeItem('isAuthenticated');
    },
    // Add any other reducer functions as needed
  },
});

export const { setUser, logout } = authSlice.actions;
export const selectUsers = (state) => state.auth.users; // Update selector to get users
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
