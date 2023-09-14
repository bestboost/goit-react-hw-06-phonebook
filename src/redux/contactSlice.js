import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userContactInitialState = {
  contacts: [],
  filters: '',
};

export const contactSlice = createSlice({
  name: 'userContact',
  initialState: userContactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const alertCondition = state.contacts.map(contact => contact.name);

        if (alertCondition.find(item => item === action.payload.name)) {
          alert(action.payload.name + ' is already in contacts');
          return;
        }
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    removeContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    filterContact(state, action) {
      state.filters = action.payload;
    },
  },
});

const persistConfig = {
  key: 'userContact',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, removeContact, filterContact } =
  contactSlice.actions;

// export const userReducer = contactSlice.reducer;
