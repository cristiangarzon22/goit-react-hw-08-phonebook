import { createSlice } from '@reduxjs/toolkit';
import {fetchContacts,deleteTask,register, addContact, login} from "../operations";
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
    setFormError(state, { payload }) {
      state.formError = payload;
    },
    clearFormError(state) {
      state.formError = null;
    },
    clearError(state) {
      state.error = null;
    },
    userLogout(state) {
      state.users = { firstName: null, lastName: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers:{
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [register.pending](state){
      state.isLoading = true;
    },
    [login.pending](state){
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [register.fulfilled](state,{payload}){
      const { firstName, lastName, email } = payload.user;
      state.user = { firstName, lastName, email };
      state.token = payload.accessToken;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [login.fulfilled](state,{payload}){
      const { firstName, lastName, email } = payload.user;
      state.user = { firstName, lastName, email };
      state.token = payload.accessToken;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
    },
    [login.rejected](state, action){
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [register.rejected](state,action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.token = payload.accessToken;
      state.isLoggedIn = true;
      state.users.push(payload);
    },
    [addContact.rejected](state, { payload }) {
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

export const { filterContacts,setFormError, clearFormError, clearError, userLogout } = contactsSlice.actions;
const contactReducer = contactsSlice.reducer;
export default contactReducer;
