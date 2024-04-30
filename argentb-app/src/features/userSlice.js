import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUser } from '../../src/api/api'; // Importez la fonction getUser

const token = localStorage.getItem('token');/* Récupérez le token d'authentification depuis le store Redux ou le localStorage */;

try {
  // Utilisez le token pour récupérer les informations de l'utilisateur
  const userData = await getUser(token);
  // Utilisez les données de l'utilisateur récupérées
  console.log(userData);
} catch (error) {
  console.error('Failed to fetch user data:', error.message);
}

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const response = await getUser();
    return response.data;
});
const initialState = {
  users: [],
  status: 'idle',
  error: null,
  // Autres états utilisateur
};
// Implémentez d'autres fonctions d'API selon vos besoins

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}, // Ajoutez un objet reducers vide si vous n'avez pas de reducers supplémentaires
    extraReducers: (builder) => {
      builder
        .addCase(fetchUser.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.users = action.payload;
        })
        .addCase(fetchUser.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  export const { setUser } = userSlice.actions;
export default userSlice.reducer;

