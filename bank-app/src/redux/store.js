//Le fichier `store.js` sert à créer et configurer votre magasin Redux, qui est l'endroit où vous allez stocker l'état global de votre application React.
import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../redux/loginSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
})