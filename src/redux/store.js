import { configureStore } from '@reduxjs/toolkit';
import { persistedContactsReducer } from './contactSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    userContact: persistedContactsReducer,
  },
});

export const persistor = persistStore(store);
