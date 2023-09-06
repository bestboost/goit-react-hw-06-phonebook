import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'userContact',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    add(state, action) {
      state.contacts = action.payload;
    },
    remove(state, action) {
      state.contacts = action.payload;
    },
    filter(state, action) {
      state.contacts = action.payload;
    },
  },
});

export const { add, remove, filter } = contactSlice.actions;
