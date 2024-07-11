// userActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUser, loginUser as loginUserAPI } from '../../api/api';
import { setUser } from './userSlice';

// Action asynchrone pour récupérer les informations de l'utilisateur
export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await getUser();
  console.log('fetchUser response:', response);
  return response.body; // Modifiez ceci selon la structure de vos données
});

// Action asynchrone pour gérer la connexion de l'utilisateur
export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await loginUserAPI(credentials);
    console.log('loginUserAPI response:', response); // Log ici pour vérifier les données
    dispatch(setUser(response.body)); // Assurez-vous que response.data contient les données utilisateur
    dispatch(fetchUser());
  } catch (error) {
    console.error('Failed to login:', error);
  }
};
