import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Création du thunk pour effectuer la requête de mise à jour du nom d'utilisateur
export const updateUsername = createAsyncThunk(
  "user/updateUsername",
  async (newUsername, { rejectWithValue, getState }) => {
    const token = getState().login.token; // Obtention du token depuis le slice "login" du state
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName: newUsername }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Création du slice pour gérer l'état du nom d'utilisateur
const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: {
      id: "",
      email: "",
      userName: "",
    },
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUsername.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateUsername.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload.body;
      })
      .addCase(updateUsername.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
