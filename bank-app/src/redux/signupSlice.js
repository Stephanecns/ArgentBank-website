//pour gérer les actions et l'état liés à l'endpoint POST /user/signup
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Ici, on définit une fonction async pour gérer l'inscription, elle envoie les infos d'inscription à l'API
export const fetchSignup = createAsyncThunk(
  "signup/fetchSignup",
  async (userDetails, { rejectWithValue }) => {
    try {
      // On envoie les infos de l'utilisateur au serveur
      const response = await fetch("http://localhost:3001/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      // On vérifie que tout se passe bien, sinon on lance une erreur
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      // On récupère la réponse du serveur
      const data = await response.json();
      return data;
    } catch (error) {
      // Si erreur il y a, on la renvoie
      return rejectWithValue(error.message);
    }
  }
);

// On définit l'état initial de notre slice
const initialState = {
  status: "idle", // status initial, pas encore chargé
  error: null, // pas d'erreur au début
  email: null, // on stockera l'email ici après l'inscription réussie
};

// On crée notre slice avec les états correspondants aux différentes phases de la requête
const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // En attente de réponse
      .addCase(fetchSignup.pending, (state) => {
        state.status = "loading";
      })
      // En cas de succès, on met à jour l'état avec les infos reçues
      .addCase(fetchSignup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.email = action.payload.email;
      })
      // Si ça échoue, on note l'erreur
      .addCase(fetchSignup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default signupSlice.reducer;
