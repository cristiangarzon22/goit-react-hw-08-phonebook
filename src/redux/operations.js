import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://connections-api.herokuapp.com/users/signup";

export const fetchContacts = createAsyncThunk(
 "contacts/GetContacts",
  async (token, thunkAPI) => {
    try {
      const response = await axios.get(`/contacts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "Contacts/createContact",
  async (Contact, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts`, Contact, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data;

      if (!response.ok) {
        throw new Error(data.message);
      }
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const deleteTask = createAsyncThunk(
  "Contacts/delete",
  async (taskId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${taskId}`);
      return taskId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
