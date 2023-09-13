//pour gérer les actions et l'état liés à l'endpoint POST /user/signup
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSignup = createAsyncThunk(
  'signup/fetchSignup',
  async (userDetails, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  status: 'idle',
  error: null,
  email: null, // vous pouvez ajouter plus de champs si nécessaire
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSignup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.email = action.payload.email; // ou toute autre info que vous recevez après une inscription réussie
      })
      .addCase(fetchSignup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default signupSlice.reducer;
