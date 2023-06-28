import { configureStore } from '@reduxjs/toolkit';
import contactReducer from "./addContacts/addContacts";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const middleware = [
  // Elimina la línea que utiliza getDefaultMiddleware
];

const authPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["token"],
};
export const store = configureStore({
  reducer: {
    contacts: persistReducer(authPersistConfig, contactReducer),
    //transactions: transactionsReducer,
  },
  middleware,
  devTools: import.meta.env.VITE_ENV === "development",
});

export const persistor = persistStore(store);
