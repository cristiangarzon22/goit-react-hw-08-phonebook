import { configureStore } from '@reduxjs/toolkit';
import contactReducer from "./addContacts/addContacts";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});