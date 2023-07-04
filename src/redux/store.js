import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { ContactsReducer } from "./contacts/slice";

const store = configureStore({
  reducer: {
    contactsList: ContactsReducer,
    auth: authReducer,
  },
});

export default store;