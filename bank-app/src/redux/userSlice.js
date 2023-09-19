import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mise en place de la logique pour envoyer une requête API avec les données du formulaire à l'aide de thunk
export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName: userData.userName }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Définition de l'état initial
const initialState = {
  userName: "",
  email: "",
  id: "",
  status: "idle",
  error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(updateUserProfile.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(updateUserProfile.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.userName = action.payload.userName;
          state.email = action.payload.email;
          state.id = action.payload.id;
        })
        .addCase(updateUserProfile.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export default userSlice.reducer;
  
  