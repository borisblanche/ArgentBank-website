
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser as apiLoginUser, getUser as apiGetUser, changeUser as apiChangeUser } from '../api';


export const loginUserThunk = createAsyncThunk('user/login', async (userData, thunkAPI) => {
  try {
    const response = await apiLoginUser(userData);
    return response.body;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchUserThunk = createAsyncThunk('user/fetchUser', async (_, { getState, rejectWithValue }) => {
  const token = getState().user.token;
  if (!token) {
    return rejectWithValue('No token available');
  }
  try {
    const data = await apiGetUser(token);
    return data.body;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const changeUserThunk = createAsyncThunk('user/changeUser', async ({ token, newUsername }, { rejectWithValue })=> {
  
  if (!token) {
    return rejectWithValue('No token available');
  }
  try {
    const data = await apiChangeUser(token, newUsername);
    return data.body;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    user: null,
    status: 'idle', 
    error: null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    removeToken(state) {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.token = null;
      state.user = null;
      state.status = 'idle';
      state.error = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.status = 'succeeded';
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'failed';
      })
      .addCase(fetchUserThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchUserThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'failed';
      })
      .addCase(changeUserThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(changeUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(changeUserThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'failed';
      });
  },
});

export const { setToken, removeToken, setUser, logout } = userSlice.actions;

export default userSlice.reducer;
