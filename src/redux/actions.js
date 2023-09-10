import { nanoid } from 'nanoid';

//add contact
export const addContact = () => {
  return {
    type: 'contacts/addContact',
    payload: {
      name: 'User entered name',
      number: 'User entered number',
      id: nanoid(),
    },
  };
};
export const deleteContact = id => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};

export const nameFilter = value => {
  return {
    type: 'filters/setFilters',
    payload: value,
  };
};
