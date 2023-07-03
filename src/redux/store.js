import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { tasksReducer } from "./task/slice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
  },
});

export default store;