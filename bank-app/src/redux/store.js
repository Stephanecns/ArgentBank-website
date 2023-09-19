//Le fichier `store.js` sert à créer et configurer votre magasin Redux, qui est l'endroit où vous allez stocker l'état global de votre application React.
import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../redux/loginSlice';
import userReducer from '../redux/userSlice';

// Le magasin est créé avec une configuration initiale qui spécifie quel réducteur doit être utilisé pour quelle partie de l'état
export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
})