// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from './/../features/userAction'; // Importez fetchUser depuis userActions

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    isAuthenticated: false,
    status: 'idle',
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log('setUser action payload:', action.payload); // Log ici pour vérifier les données
      state.userData = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userData = null;
      state.isAuthenticated = false;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        console.log('fetchUser fulfilled payload:', action.payload); // Log ici pour vérifier les données
        state.status = 'succeeded';
        state.userData = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
