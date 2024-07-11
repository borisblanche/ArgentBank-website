// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './api/features/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
