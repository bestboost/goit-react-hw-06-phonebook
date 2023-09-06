import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';

export const store = configureStore({
  reducer: {
    userContact: contactSlice.reducer,
  },
});
