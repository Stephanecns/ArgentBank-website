import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk pour la mise à jour du nom d'utilisateur
export const updateUsername = createAsyncThunk(
  "user/updateUsername",
  async (newUsername, { rejectWithValue, getState }) => {
    const token = getState().login.token;

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

// Thunk pour récupérer le profil de l'utilisateur
export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, { rejectWithValue, getState }) => {
    const token = getState().login.token;

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Unable to fetch user profile.");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  profile: JSON.parse(localStorage.getItem("userProfile")) || {
    id: "",
    email: "",
    userName: "",
  },
  status: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserProfile: (state) => {
      state.profile = {
        id: "",
        email: "",
        userName: "",
      };
      state.status = null;
      state.error = null;
      localStorage.removeItem("userProfile");
    },
  },
  extraReducers: (builder) => {
    builder
      // Pour updateUsername
      .addCase(updateUsername.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateUsername.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload.body;
        localStorage.setItem(
          "userProfile",
          JSON.stringify(action.payload.body)
        );
      })
      .addCase(updateUsername.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Pour fetchUserProfile
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload.body;
        localStorage.setItem(
          "userProfile",
          JSON.stringify(action.payload.body)
        );
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetUserProfile } = userSlice.actions;
export default userSlice.reducer;
