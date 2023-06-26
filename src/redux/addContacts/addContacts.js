import { createSlice } from '@reduxjs/toolkit';
import {fetchTasks,addTask,deleteTask} from "../operations";
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    users: { firstName: null, lastName: null, email: null },
    token: null,
    isLoading: false,
    isLoggedIn: false,
    error: null,
    formError: null,
    items: [],
    filter:"",
  },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers:{
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addTask.pending](state) {
      state.isLoading = true;
    },
    [addTask.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.token = payload.accessToken;
      state.isLoggedIn = true;
      state.users.push(payload);
    },
    [addTask.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteTask.pending](state){
      state.isLoading = true;
    },
    [deleteTask.fulfilled](state, {payload}){
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(task => task.id !== payload);
    },
    [deleteTask.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { filterContacts } = contactsSlice.actions;
const contactReducer = contactsSlice.reducer;
export default contactReducer;
