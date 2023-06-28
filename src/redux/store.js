import { configureStore } from '@reduxjs/toolkit';
import contactReducer from "./addContacts/addContacts";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,

} from "redux-persist";

const middleware = [];

const authPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["token"],
};
//A
export const store = configureStore({
  reducer: {
    contacts: persistReducer(authPersistConfig, contactReducer),
    
  },
  middleware,
  
});

export const persistor = persistStore(store);
