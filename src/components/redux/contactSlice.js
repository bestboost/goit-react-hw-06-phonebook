import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'userContact',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts = action.payload;
    },
    removeContact(state, action) {
      state.contacts = action.payload;
    },
    filterContact(state, action) {
      state.contacts = action.payload;
    },
  },
});

export const { addContact, removeContact, filterContact } =
  contactSlice.actions;
